const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const profile= new Schema({
    name:{
        type:String,
        required: [true, 'Name Field is required']
    },
    phone:{
        type:Number,
        required: [true, 'Phone Field is required']
    },
    email:{
        type:String,
        required: [true, 'Phone Field is required']
    }
});

const ProfileSchema = mongoose.model('profileSchema',profile)
module.exports = ProfileSchema;