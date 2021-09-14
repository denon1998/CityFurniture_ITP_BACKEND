var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const DriverModel = require('../models/driver.model');

const Driver = mongoose.model('Driver', DriverModel);

/* GET driver listing.    http://localhost:8081/api/driver/         */
router.get('/', function (req, res, next) {
	var page = Number((req.query.page ?? 1) - 1);
	var size = Number(req.query.size ?? 5);
	Driver.countDocuments((n, i) => {
		Driver.find(
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


	Driver.find({ "_id": mongoose.Types.ObjectId(req.params.id) },
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
		$or: [{ empID: new RegExp((searchQuery), "i") },
		{ empName: new RegExp((searchQuery), "i") },
		{ vehicleID: new RegExp((searchQuery), "i") },
		{ currentOrderID: new RegExp((searchQuery), "i") },
		{ contactNumber: new RegExp((searchQuery), "i") },]

	}
	console.log(searchQuery);
	Driver.find(query,
		(e, r) => {
			res.setHeader('X-Total-Count', r.length)
			Driver.find(query,
				(ee, rr) => {
					res.json(rr)
				}
			).limit(size)
				.skip(size * page);
		}
	)
});


router.post('/', async function (req, res, next) {
	console.log('save driver')
	await Driver(req.body).save((e, d) => {
		res.send(d);
	});
});




router.route("/").put(function (req, res) {
	const userID = req.params.id;
	var { empID, empName, vehicleID, currentOrderID, contactNumber, _id } = req.body;

	const query = { "_id": mongoose.Types.ObjectId(_id) };
	const update = {
		"$set": {
			empID,
			empName,
			vehicleID,
			currentOrderID,
			contactNumber

		}
	};
	const options = { "upsert": true };

	Driver.findOneAndUpdate(query, update, options, function (e, d) {
		if (e) return res.send(500, { error: e });
		res.send('ok')
	})
})










router.delete('/', async function (req, res, next) {

	await Driver.deleteOne(req.body, (e) => {
		if (e) return res.send(500, { error: e });
		res.send('ok')
	})

});


module.exports = router;