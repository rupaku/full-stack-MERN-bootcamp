const Product = require("../models/product")
const formidable = require("formidable")
const _ = require("lodash")
const fs = require("fs")
const { fromPairs } = require("lodash")

exports.getProductById = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((err, product) => {
      if (err || !product) {
        return res.status(400).json({
          error: "product  was not found in DB",
        })
      }

      req.product = product
      next()
    })
}

exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true // o keep extension of file

  //parse form
  fromPairs.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      })
    }

    //TODO: restrictions on fields
    let product = new Product(fields)
    //handle file here
    if (file.photo) {
      //3mb 1024*1024*2
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size is too big",
        })
      }
      //pass file from formidable to read
      product.photo.data = fs.readFileSync(file.photo.path)
      product.photo.contentType = file.photo.type
    }

    //save to DB
    product.save((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "saving data in DB failed",
        })
      }
      return res.json(product)
    })
  })
}
