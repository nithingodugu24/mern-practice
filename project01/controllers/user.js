const User = require("../models/user");

async function handleGetAllUsers(req, res){
    const allusers = await User.find({});
    return res.json(allusers)
}

async function handleGetUserById(req, res){
    const userData = await User.findOne({
        "_id": req.params.id
    });
    res.json(userData);
}

async function handleCreateUser(req, res){
    let body = req.body;
    if (!body.firstName ||
        !body.email ||
        !body.gender
    ) {
        return res.json({
            msg: "Enter all fields"
        })
    }
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
    });
    return res.status(201).json({
        msg: "success",
        ...result
    })
}

async function handleUpdateUserById(req, res){
    const users = User.findOne({
        "_id": req.params.id
    })
    if (!users) {
        return res.json({
            msg: "Invalid userid"
        })
    }
    let userdata = users[0];
    userdata = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
    }
    await User.findByIdAndUpdate(req.params.id, userdata)

    return res.json({
        ...userdata,
        msg: "User data updated sucesfully"
    })
}

async function handleDeleteUserById(req, res){
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if (!deletedUser) {
        return res.status(404).json({
            message: "User not found"
        });

    }
    res.json({
        message: "User deleted",
        data: deletedUser
    });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateUser,
    handleUpdateUserById,
    handleDeleteUserById
}