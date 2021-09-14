var express = require('express');
var router = express.Router();
const mongoose = require('mongoose'); 
const DeliveryModel = require('../models/delivery.model');

const Delivery = mongoose.model('Delivery', DeliveryModel);


/* GET delivery listing.    http://localhost:8081/api/delivery/         */
router.get('/', function (req, res, next) {
	var page = Number((req.query.page ?? 1) - 1); 
	var size = Number(req.query.size ?? 5);

	Delivery.countDocuments((n, i) => {

		Delivery.find(
		)
			.limit(size)
			.skip(size * page)
			.sort({ _id: "desc" })
			.then((d) => {
				res.setHeader('X-Total-Count', i)
				res.json(d)
			});
	});

});
router.get('/', function (req, res, next) {


	Delivery.find(
		(e, r) => {
			res.json(r)
		}
	)
});
router.get('/getById/:id', function (req, res, next) {


	Delivery.find({ "_id": mongoose.Types.ObjectId(req.params.id) },
		(e, r) => {
			res.json(r[0])
		}
	)
});
router.get('/_search', function (req, res, next) {

	var page = Number((req.query.page ?? 1) - 1);
	var size = Number(req.query.size ?? 5);
	var searchQuery = req.query.query ?? '*';

	const query = {
		$or: [{ deliveryID: new RegExp((searchQuery), "i") },
		{ orderID: new RegExp((searchQuery), "i") },
		{ receiverAddress: new RegExp((searchQuery), "i") },
		{ assignedDriver: new RegExp((searchQuery), "i") },
		{ latitude: new RegExp((searchQuery), "i") },
		{ longtude: new RegExp((searchQuery), "i") },
		{ status: new RegExp((searchQuery), "i") },]
	}
	console.log(searchQuery);
	Delivery 
		.find(query,
			(e, r) => {
				res.setHeader('X-Total-Count', r.length) 
				Delivery 
					.find(query,
						(ee, rr) => { 
							res.json(rr)
						} 
					)
					.limit(size)
					.skip(size * page);
			} 
		)

});
router.post('/', async function (req, res, next) {

	await Delivery(req.body).save((e, d) => {
		res.send(d);
	});
});




router.route("/").put(function (req, res) {
	const userID = req.params.id;
	var { deliveryID, orderID, receiverAddress, assignedDriver, lat, long, status, _id,remarks } = req.body;


	const query = { "_id":  mongoose.Types.ObjectId(_id) };
	const update = {
		"$set": {
			deliveryID,
			orderID,
			receiverAddress,
			assignedDriver,
			lat,
			long,
			status,
			remarks

		}
	};
	console.log(JSON.stringify({
		deliveryID,
		orderID,
		receiverAddress,
		assignedDriver,
		lat,
		long,
		status,
		remarks

	}))
	const options = { "upsert": true };

	Delivery.findOneAndUpdate(query, update, options, function (e, d) {
		if (e) return res.send(500, { error: e });
		res.send('ok')
	})
})










router.delete('/', async function (req, res, next) {

	await Delivery.deleteOne(req.body, (e) => {
		if (e) return res.send(500, { error: e });
		res.send('ok')
	})

});


module.exports = router;