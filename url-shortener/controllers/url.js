const URL = require("../models/url");
const nanoid = require('nano-id');

async function handleGenerateNewShortURL(req, res){
    if(!req.body.redirect_url){
        return res.status(400).json({
            message: "Enter all fields",
        })
    }
    let shortId = nanoid(5);
    await URL.create({
        shortId: shortId,
        redirectUrl: req.body.redirect_url,
    })

    return res.json({
        "url": shortId,
        "message": "Short URL generated",
    })
}

async function handleRedirectShortURL(req, res){
    const shortId = req.params.shortId;
    const urlData = await URL.findOneAndUpdate({"shortId": shortId}, {
        $push: {
            visitHistory: {
                timeStamp: Date.now(),
                ipAddress: req.ip,
                userAgent: req.headers['user-agent'],
            }
        }
    })
    if(!urlData){
        return res.status(400).json({
        "message": "short link not exist",
    })
    }
    res.redirect(urlData.redirectUrl);
}

async function handleAnalytics(req, res){
    const urlData = await URL.findOne({"shortId": req.params.shortId})
    if(!urlData){
        return res.status(400).json({
            message: "Short link not exist",
        })
    }
    return res.json({
        clicks : urlData.visitHistory.length,
    })
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedirectShortURL,
    handleAnalytics
}