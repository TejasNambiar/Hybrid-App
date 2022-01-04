Profile = require("../Models/profileSchema")

// retrieve profile details
module.exports.getProfile = (req,res) =>{
    Profile.find((err, details) =>{
        if(err)
            res.json(err)
        else
            res.json(details)
    })
}

module.exports.deleteProfile = (req,res) =>{
    Profile.deleteOne({_id:req.params.id}, (err, profile)=>{
        if(err)
            res.status(404).json(err)
        else{
            console.log('Deleted User Profile Details')
            res.status(200).json(profile)
        }
    })
}

module.exports.getProfileById = (req, res) =>{
    Profile.findOne({_id:req.params.id}, (err, profile)=>{
        if(err)
            res.status(404).json(err)
        else{
            console.log('Retrieved User Profile Details')
            res.status(200).json(profile)
        }
    }) 
}