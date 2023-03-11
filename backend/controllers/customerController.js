const db = require('../models');
const Customer = db.customers;

// Get All Customer details
exports.getCustomers = (req,res,next) => {
    // res.status(200).json({
    //     success:true,
    //     message:"View all Customers"
    // });

    Customer.findAll().then(data =>{
        res.send(data);
    })
}

//Create new Customer
exports.addCustomer = (req,res,next) =>{
    const customer ={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        address:req.body.address,
        mobile:req.body.mobile,
        avatar:req.body.avatar,
        userId:req.body.userId,
    };

    Customer.create(customer).then(data => {
        res.status(201).send("Customer successfully created");
    }).catch(err => {
        res.status(500).send({
          message:
          err.message || "Some error occurred while creating the Customer."
       });
    });
}