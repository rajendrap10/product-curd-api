const Product  = require("../models/productModel")


exports.getProduct = async (req, res) => {
    try {
        
        const product = await Product.findById(req.params.id);
        if(product) {
            res.status(200).send({
                'success':true,
                'data':product,
                'message':'Product Detail.'
            });
        } else {
            res.status(401).send({
                'success':false,
                'data':null,
                'message':'List of all products.'
            });
        }

    } catch (error) {
            res.status(200).send({
                'success':false,
                'data':null,
                'message':error
            });
    }
}


exports.getProducts= async (req, res) => {
    try {
        
        const products = await Product.find();
        if(products) {
            res.status(200).send({
                'success':true,
                'data':products,
                'message':'List of all products.'
            });
        } else {
            res.status(401).send({
                'success':false,
                'data':null,
                'message':'List of all products.'
            });
        }

    } catch (error) {
            res.status(200).send({
                'success':false,
                'data':null,
                'message':error
            });
    }
}

exports.addProduct = async (req, res) => {
    try {
        const { name, quantity, price, description } = req.body;
        const new_product = new Product({
            name,
            quantity,
            price,
            description
        });

        //console.log(product);
        
        await new_product.save(function(err,result){
            if (err){
                res.status(401).send({
                    'success':false,
                    'data':null,
                    'message':'Failed to save data.'
                });
            }
            else{
                res.status(200).send({
                    'success':true,
                    'data':result,
                    'message':'Product has been created, successfully.'
                });
            }
        });
    } catch (error) {
        (error) => {
                res.status(400).json({
                    error:error
                });
        }
    }   
}

exports.editProduct = async (req, res) => {
    try {
        const { name, quantity, price, description } = req.body;
        var user_id = req.params.id;

        const product_data = {
            name,
            quantity,
            price,
            description
        };


        await Product.findByIdAndUpdate(user_id, product_data,
            function (err, docs) {
                if (err){
                    res.status(401).send({
                        'success':false,
                        'data':null,
                        'message':err
                    });
                }
                else{
                    res.status(401).send({
                        'success':true,
                        'data':docs,
                        'message':'Product data has been updated, successfully.'
                    });
                }
            });


    } catch (error) {
        (error) => {
                res.status(400).json({
                    error:error
                });
        }
    }   
}


exports.deleteProduct = async (req, res) => {
    try {

        await Product.findByIdAndDelete(req.params.id, function (err) {
            if(err) {
                res.status(200).send({
                    'success':false,
                    'data':null,
                    'message':err
                });
            }  else {
                res.status(200).send({
                    'success':true,
                    'data':null,
                    'message':'Product has been deleted, successfully.'
                });
            }
        });
        
    } catch (error) {
        (error) => {
                res.status(400).json({
                    error:error
                });
        }
    }   
}