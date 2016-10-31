var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var connection = require("../config/db");

//autoIncrement = require('mongoose-auto-increment');

//Now you can create aiContent entity which will have an _id field added of type Number and will automatically increment with each new document
//autoIncrement.initialize(connection);

var aiContentSchema = new Schema({
        //_id: {type: Number, required: true, unique: true}, //you can skip it with auto increment
        name: {type: String, required: true},
        keywords: [{
            text: {type: String, required: true}
        }],
        content: {type: String, required: true}
    },
    {
        timestamps: true
    });


//aiContentSchema.plugin(autoIncrement.plugin, 'AiContents');

var AiContent = mongoose.model('AiContent', aiContentSchema);

module.exports = AiContent;