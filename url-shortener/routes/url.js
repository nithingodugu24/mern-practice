const express = require("express");
const {handleGenerateNewShortURL, 
    handleRedirectShortURL, 
    handleAnalytics} = require("../controllers/url");


const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleRedirectShortURL);
router.get("/analytics/:shortId", handleAnalytics);


module.exports = router;