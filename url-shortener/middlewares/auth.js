const {getUser} = require("../service/auth");


function verifyUser(req, res, next){
    if(!req.cookies || !req.cookies.uid) return res.redirect("/login");

    const userData = getUser(req.cookies.uid);
    if(!userData) return res.redirect("/login");

    req.user = userData;
    next();
}

module.exports = verifyUser;