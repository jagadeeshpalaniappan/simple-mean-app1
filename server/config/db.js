var mongoose = require('mongoose');
// set Promise provider to bluebird
mongoose.Promise = require('bluebird');



//var strCon=process.env.MONGODB_URI;

var strCon="mongodb://localhost/ts-spark-admin";


var connection = mongoose.connect(strCon);

module.exports = connection;
