
var express = require('express');


module.exports = function (app) {


    // author @nuwanthika
    app.use('/api/drivers', require('../controllers/driver'));
    app.use('/api/vehicles', require('../controllers/vehicle'));
    app.use('/api/deliveries', require('../controllers/delivery'));
    app.use('/api/orders', require('../controllers/order'));
    // @nuwanthika: end


    // author @anjali ;
    app.use('/api/employees', require('../controllers/employees'));
    app.use('/api/salary', require('../controllers/salary'));
    app.use('/api/attendence', require('../controllers/attendence'));
    app.use('/api/leavedemp', require('../controllers/leavedemp'));
    app.use('/uploads', express.static('uploads'));
    // @anjali: end




    // author @kithmini ;
    app.use('/api/feedback', require('../controllers/feedback'));
    app.use('/api/contact', require('../controllers/contact'));
    app.use('/api/FAQs', require('../controllers/FAQs'));
    app.use('/api/suggestion', require('../controllers/suggestion')); 
    // @kithmini: end


    // @chanduni ;
    app.use('/api', require('../controllers/admincat'));
    app.use('/api', require('../controllers/posts'));
    // @chanduni: end



    // @shavinda ;
    app.use('/api', require('../controllers/supPosts'));
    app.use('/api', require('../controllers/product_posts'));
    app.use('/api', require('../controllers/categoryPosts'));
    // @shavinda: end

    // @Priyankara
    app.use('/api/exercises', require('../controllers/exercises'));
    app.use('/api/users', require('../controllers/users'));
    // @Priyankara: end 
    
    // @Samali
    app.use('/api', require('../controllers/cardpay'));
    app.use('/api', require('../controllers/paypal'));
    // @Samali: end

    // @Supiniduni
    app.use('/api', require('../controllers/postsCategories'));
    app.use('/api', require('../controllers/postsOffers'));
    app.use('/api', require('../controllers/product_posts'));
    app.use('/api', require('../controllers/postsProducts'));
    // @Supiniduni: end

 
}