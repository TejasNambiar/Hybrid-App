const express = require('express')
const router = express.Router();
const Profile = require('../Models/profileSchema')
const controller = require('../Controller/profileControls');

const handleErrors = (err) =>{
    console.log(err.message)
    let error = {userName: '', firstName: '', lastName: ''}
    
    // duplicate error code
    if(err.code === 11000){
        error.userName = 'userName already registered'
        return error
    }

    // validation error 
    if(err.message.includes('profileSchema validation failed')){
        Object.values(err.errors)
            .forEach(({properties}) =>{
                error[properties.path] = properties.message
            })
        
    }

    return error
}

router.get('/profile', controller.getProfile)

router.get('/profile/:id', controller.getProfileById)

router.post('/profileedit', async (req, res) =>{
    const {
        userName, firstName, lastName,
        address, email,
        phone, notification,
        DOB
    } = req.body;
    
    try{
        const user = await Profile.create({
            userName, firstName, lastName,
            address, email,
            phone, notification,
            DOB
        })
        res.status(200).json(user)
    }catch(err){
        const errors = handleErrors(err)
        res.status(404).json(errors)
    }
    console.log(req.body)
    
})

router.put('/profile/:id', (req, res) =>{
    res.send({type:'PUT'});
})

router.delete('/profile/:id', controller.deleteProfile)

module.exports =  router;