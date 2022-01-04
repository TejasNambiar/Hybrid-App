const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { isEmail } = require('validator')

const profile= new Schema({
    userName:{
        type:String,
        required: [true, 'User-Name Field is required'],
        minlength: [3, 'Minimum length is 3 characters'],
        unique: true
    },
    firstName:{
        type:String,
        required: [true, 'First Name Field is required'],
        minlength: [3, 'Minimum length is 3 characters'],
        maxlength: [50, 'Maximum length is 50 characters']
    },
    lastName:{
        type:String,
        required: [true, 'Last Name Field is required'],
        minlength: [3, 'Minimum length is 3 characters'],
        maxlength: [50, 'Maximum length is 50 characters']
    },
    phone:{
        type:Number,
        length: [10, "length should be only 10"],
        required: [true, 'Phone Field is required']
    },
    email:{
        type:String,
        validate: [isEmail, "Please enter valid email"],
        required: [true, 'email Field is required']
    },
    address:{
        type:String,
        required: [true, 'Address Field is required']
    },
    notification:{
        type:String,
        required: [true, 'Notification Field is required']
    },
    DOB:{
        type:Date,
        required: [true, 'Date Field is required']
    }
});

// fired before doc was saved to database
profile.pre('save',function(next){
    console.log('new profile about to be created', this)
    next()
})

// fired after doc was saved to database
profile.post('save',function(doc,next){
    console.log('new rofile was created & saved', doc)
    next()
})

const ProfileSchema = mongoose.model('profileSchema',profile)
module.exports = ProfileSchema;