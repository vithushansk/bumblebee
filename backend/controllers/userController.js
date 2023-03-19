const db = require('../models');
const User = db.users;

// Get All user details
exports.getUsers = (req,res,next) => {
    User.findAll().then(data =>{
        res.send(data);
    })
}

//Create new user
exports.addUser = (req,res,next) =>{
    const user ={
        username:req.body.username,
        password:req.body.password,
        dateOfBirth:req.body.dateOfBirth,
        active:req.body.active
    };

    User.create(user).then(data => {
        res.status(201).send("User successfully created");
    }).catch(err => {
        res.status(500).send({
          message:
          err.message || "Some error occurred while creating the User."
       });
    });
}