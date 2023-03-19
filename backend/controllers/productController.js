const db = require('../models');
const Product = db.products;

//product/view - GET
exports.getProducts = (req,res,next) => {
    Product.findAll().then(data => {
        res.send(data)
    });
} 

//product/new - POST
exports.newProduct = (req,res,next) => {
    Product.create(req.body).then(data => {
        res.status(201).send("Product successfully Added");
    }).catch(err => {
        res.status(500).send({
          message:
          err.message || "Some error occurred while creating the Product."
       });
    });
}

// product/findOne - GET
exports.getProductById = async (req, res) => {
    try {
      const response = await Product.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
};

exports.updateProduct = async (req,res,next) =>{
  try {
    await Product.update(req.body,{
      where:{
        id:req.params.id
      }
    });
    res.status(201).send("Product update successfully");
  } catch (error) {
    console.log(error.message);
  }
}

