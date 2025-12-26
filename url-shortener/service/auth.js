const jwt = require("jsonwebtoken");

const secretKey = "@endhi74BRoshathakani";

function setUser(user){
    return jwt.sign(user, secretKey);
}

function getUser(token){
    if(!token) return null;
    try{
        return jwt.verify(token, secretKey);
    }catch(err){
        return null;
    }
}

module.exports = {
    setUser, getUser
}