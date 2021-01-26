const express = require("express")
const router = express.Router()

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getAllUniqueCategories,
} = require("../controllers/product")
const { isAdmin, isAuthenticated, isSignedIn } = require("../controllers/auth")
const { getUserById } = require("../controllers/user")
const { route } = require("./auth")

//params
router.param("userId", getUserById)
router.param("productId", getProductById)

//all of actial routes
//create
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
)

//read
router.get("/product/:productId", getProduct)
router.get("/product/photo/:productId", photo)

//delete
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
)
//update
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
)
//listing
router.get("/products", getAllProducts)

router.get("/products/categories", getAllUniqueCategories)
module.exports = router
