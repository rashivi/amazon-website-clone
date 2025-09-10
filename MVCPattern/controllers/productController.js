const Product =  require('../models/productModel');

//business logic

const getProducts = async(req,res) =>  {
   try{
    
      const allProducts = Product.find();
      if(!allProducts){
        res.json({
            message: "There is No Product"
        })
      }
      //if we have products >= 1
      res.status(200).json({
        success: true,
        Products:allProducts,
      })
   }
   catch(err){
     res.status(500).json({
        success:false,
        message:"Internal Server Error"
     })
   }
}

const createProduct = async (req, res) => {
    try{
        const {name, price, description, category} = req.body;
        const newProduct = new Product({name, price, description, cateogry});
        await newProduct.save();
        res.status(200).json({
            Product: newProduct
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server Error"
        })
    }
}

const updateProduct = async(req, res) => {
    try{
        console.log("PUT ki request aayi hai")
        const {id} = req.params;
        const {name, price, description, categary} = req.body;

        const updateProduct = await Product.findByIdAndUpdate
        (id, {name, price, description, categary});

        if(!updateProduct){
            res.json({
                message:"cannot find product"
            })

            
        }

        res.status(200).json({
            Product: updateProduct
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const deleteProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const deleteProduct = await Product.findByIdAndDelete(i);

        if(!deleteProduct){
            res.json({
                message: "Product not found cannot delete"
            })
        }
        res.status(200).json({
            message: "Product Deleted Successfully",
            product: deleteProduct
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}


module.exports = {getProducts, updateProduct, createProduct, deleteProduct}