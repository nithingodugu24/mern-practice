const express = require("express");
const {handleCreateUser, handleLoginUser} = require("../controllers/user");

const router = express.Router();

router.get("/signup",(req, res)=> res.render("signup"));
router.post("/signup",handleCreateUser);
router.get("/login",(req, res)=> res.render("login"));
router.post("/login",handleLoginUser);


module.exports = router;
