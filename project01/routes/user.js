const express = require("express");
const {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateUser,
    handleUpdateUserById,
    handleDeleteUserById
} = require("../controllers/user");

const router = express.Router();


router.get("/", handleGetAllUsers)
router.post("/", handleCreateUser)

// router.get("/:id",handleGetUserById)
// router.patch("/:id", handleUpdateUserById)
// router.delete("/:id", handleDeleteUserById)
//  or

router.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)

module.exports = router;