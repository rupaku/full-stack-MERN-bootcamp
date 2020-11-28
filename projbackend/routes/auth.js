var express = require("express")
var router = express.Router()
const { body } = require("express-validator")
const { signout, signup, signin, isSignedIn } = require("../controllers/auth")

router.post(
  "/signup",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("name should be atleast 3 chars"),
    body("email", "email is required").isEmail(),
    body("password")
      .isLength({ min: 3 })
      .withMessage("password should be atleast 3 chars"),
  ],
  signup
)

router.post(
  "/signin",
  [
    body("email", "email is required").isEmail(),
    body("password")
      .isLength({ min: 3 })
      .withMessage("password should be atleast 3 chars"),
  ],
  signin
)

router.get("/signout", signout)

router.get("/testroute", isSignedIn, (req, res) => {
  return res.json(res.auth)
})

module.exports = router
