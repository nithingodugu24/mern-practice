const User = require("../models/user");
const {setUser, getUser} = require("../service/auth");

async function handleCreateUser(req, res){
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.render("signup", {
            error: "Enter all fields",
        })
    }

    try{
        User.create({
            name, email, password
        })
        return res.redirect("/login");
    }catch(error){
        return res.render("signup", {
            error: error,
        })
    }
}

async function handleLoginUser(req, res){
    const {email, password} = req.body;
    if(!email || !password){
        return res.render("login", {
            error: "Enter all fields",
        })
    }

    const userData = await User.findOne({ email: email, password: password});
    if(!userData){
        return res.render("login", {
            error: "enter valid login details",
        })
    }
    

    const token = setUser({
        _id: userData._id,
        email: userData.email,
        isAdmin: userData.isAdmin,
    })

    res.cookie("uid", token);

    return res.redirect("/");

}

module.exports = {handleCreateUser, handleLoginUser}