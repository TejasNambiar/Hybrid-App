const express = require('express')
const router = express.Router();
const Profile = require('../Models/profileSchema')

router.get('/ninjas', (req, res) =>{
    res.send({type:'GET'});
})

router.post('/ninjas', (req, res) =>{
    console.log(req.body)
    Profile.create(req.body).then((data)=>{
        res.send(data)
    })
})

router.put('/ninjas/:id', (req, res) =>{
    res.send({type:'PUT'});
})

router.delete('/ninjas/:id', (req, res) =>{
    res.send({type:'DELETE'});
})

module.exports =  router;