const fs = require("fs");

function logRequest(fileName) {
    return (req, res, next) => {
        fs.appendFile(fileName, `${Date.now()}: ${req.method} - ${req.path} - ${req.ip}\n`, (err) => {
            next();
        });
    }
}

module.exports = {
    logRequest,
}