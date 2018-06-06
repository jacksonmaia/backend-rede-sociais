var mongoose = require('mongoose');
module.exports = function(){
    var schema = mongoose.Schema({
        texto: {
            type:String,
            required: true
        },
        like: {
            type: Number,
            required: true,

        },
        uid: {
            type: String,
            required: true,
            index:{
                unique:true
            }
        },
    });
    return mongoose.model('Post', schema);
}();