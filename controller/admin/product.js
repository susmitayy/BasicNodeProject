//for database access

const Product = require("../../model/product")

exports.getAddProduct = (req,res) => {
    res.render('admin/add_product')
}

exports.getViewProduct = (req,res) => {
    Product.find()
    .then(result => {
        res.render('admin/view_product', {
            data: result
        })
    })
    .catch(err => {
        console.log(err)
    res.render('admin/view_product')
    })
     
}
 
// exports.getEditProduct = (req,res) => {
//     res.render('admin/edit_product')
// }

exports.postAddProduct = (req,res) => {
    console.log(req.body)
    Product.create({...req.body})
    .then(result => {
        res.redirect('/admin/add-product')
    })
    .catch(err => {
        console.log(err)
    })
}

exports.getDeleteProduct = (req, res) => { 
    Product.findByIdAndDelete(req.params.id)
    .then(result => {
        // console.log("success")
        res.redirect('/admin/view-products')
    })
    .catch(err => {
        console.log(err)
    })
}

exports.getEditProduct = (req, res) => {
    console.log(req.params.id)
    Product.findById(req.params.id)
    .then(result => {
        res.render('admin/edit_product', {
            data: result
        })
    })
    .catch(err => {

    })
    
}
exports.postEditProduct = (req, res) => {
  
    Product.findByIdAndUpdate(req.params.id, {...req.body})
    .then(result => {
        // res.send("Successfully edited")
        res.redirect("/admin/view-products")
    })
    .catch(err => {
        console.log(err)
    })
}

