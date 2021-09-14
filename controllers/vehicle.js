var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');  
const VehicleModel = require('../models/vehicle.model');

const Vehicle = mongoose.model('Vehicle', VehicleModel);

/* GET vehicle listing.    http://localhost:8081/api/vehicle/         */
router.get('/', function (req, res, next) {
	var page = Number((req.query.page ?? 1) - 1);
	var size = Number(req.query.size ?? 5);

	Vehicle.countDocuments((n, i) => {


		Vehicle.find(
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








router.get('/getById/:id', function (req, res, next) {



	Vehicle.find({ "_id":  mongoose.Types.ObjectId(req.params.id) },
		(e, r) => {
			res.json(r[0])
		}
	)
});
router.get('/', async (req, res, next) => {


	await Vehicle.find(
		(e, r) => {
			res.json(r)
		}
	)
});



router.get('/_search', function (req, res, next) {
	var page = Number((req.query.page ?? 1) - 1);
	var size = Number(req.query.size ?? 5);
	var searchQuery = req.query.query ?? '*';


	const query = {
		$or: [
			{ vehicleID: new RegExp((searchQuery), "i") },
			{ vehicleLicenseNO: new RegExp((searchQuery), "i") },
			{ mileage: new RegExp((searchQuery), "i") },
		//  { nextServiceReminder: new RegExp((searchQuery), "i") },
		]
	};
	console.log(searchQuery);
	Vehicle 
		.find(query,
			(e, r) => {
				res.setHeader('X-Total-Count', r.length) 
				Vehicle 
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

	await Vehicle(req.body).save((e, d) => {
		res.send(d);
	});
});




router.route("/").put(function (req, res) {
	const userID = req.params.id;
	var { vehicleID, vehicleLicenseNO, mileage, nextServiceReminder, _id } = req.body;



	const query = { "_id":  mongoose.Types.ObjectId(_id) };
	const update = {
		"$set": {
			vehicleID,
			vehicleLicenseNO,
			mileage,
			nextServiceReminder,
			_id
		}
	};

	const options = { "upsert": true };

	Vehicle.findOneAndUpdate(query, update, options, function (e, d) {
		if (e) return res.send(500, { error: e });
		res.send('ok') 
	})
})










router.delete('/', async function (req, res, next) {

	await Vehicle.deleteOne(req.body, (e) => {
		if (e) return res.send(500, { error: e });
		res.send('ok')
	})

});


module.exports = router;