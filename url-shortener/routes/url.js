const express = require("express");
const {handleGenerateNewShortURL, 
    handleRedirectShortURL, 
    handleAnalytics,
    handleGetAllURLs
} = require("../controllers/url");


const router = express.Router();

router.get("/",handleGetAllURLs);
router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleRedirectShortURL);
router.get("/analytics/:shortId", handleAnalytics);


module.exports = router;