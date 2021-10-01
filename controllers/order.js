const { query } = require('express');
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const OrderModel = require('../models/orders.model');
OrderModel.index({ '$**': 'text' });

const Order = mongoose.model('order', OrderModel);

// OrderModel.index({'$**': 'text'}); 
// {$text: {$search: searchString}}
/* GET  all order listing.    http://localhost:8081/api/order/         */

router.get('/', function (req, res, next) {
	OrderModel.index({ '$**': 'text' });

	var page = Number((req.query.page ?? 1) - 1);
	var size = Number(req.query.size ?? 5);

	Order.countDocuments((n, i) => {


		Order.find(
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


	Order.find(
		(e, r) => {
			res.json(r)
		}
	)
});

// Get by id

router.get('/getById/:id', function (req, res, next) {


	Order.find({ "_id": mongoose.Types.ObjectId(req.params.id) },
		(e, r) => {
			res.json(r[0])
		}
	)


});

//search

router.get('/_search', function (req, res, next) {

	var page = Number((req.query.page ?? 1) - 1);
	var size = Number(req.query.size ?? 5);
	var searchQuery = req.query.query ?? '*';

	const query = { $text: { $search: searchQuery } }
	OrderModel.index({ '$**': 'text' });
	try {
		console.log(query);
		Order
			.find({ $text: { $search: query } },
				(e, r) => {
					res.setHeader('X-Total-Count', r.length)
					Order.find({ $text: { $search: query } },
						(ee, rr) => {
							res.json(rr)
						}
					).limit(size).skip(size * page);
				}
			)

	} catch (e) {
		console.log(e)
	}

});

//Save
router.post('/', (req, res, next) => {
	console.log(JSON.stringify(req.body))
	Order(req.body).save((e, d) => {
		console.log(d)
		res.send(d);
	});
});


//UPDATE

router.route("/").put(function (req, res) {
	var { orderID, name, postalNo, street, town, contactNo, orderDate, status, assignedDriver, _id } = req.body;


	const query = { "_id": mongoose.Types.ObjectId(_id) };
	const update = {
		"$set": {
			orderID,
			name,
			postalNo,
			street,
			town,
			contactNo,
			orderDate,
			status,
			assignedDriver,
			_id

		}
	};

	const options = { "upsert": true };

	Order.findOneAndUpdate(query, update, options, function (e, d) {
		if (e) return res.send(500, { error: e });
		res.send('ok')
	})
})







//DELETE



router.delete('/', async function (req, res, next) {

	await Order.deleteOne(req.body, (e) => {
		if (e) return res.send(500, { error: e });
		res.send('ok')
	})

});


module.exports = router;