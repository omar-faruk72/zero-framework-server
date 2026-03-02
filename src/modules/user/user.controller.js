import { userServices } from "./user.service.js"


// create user
const createUser = async(req, res) => {
    try{
        const result = await userServices.createUser(req.body);
        res.status(201).json({
            status: true,
            data: result
        });
    }catch(err){
        res.status(err.statusCode || 500).json({
            status: false,
            message: err.message
        })
    }
};

// user login
const loginUser = async(req, res) => {
    try{
        const result = await userServices.loginUser(req.body);
        res.status(200).json({
            status: true,
            message: "Login successful",
            data: result
        });
    }catch(err){
        res.status(err.statusCode || 500).json({
            status: false,
            message: err.message
            });
    }
};

// get all user
const getAllUser = async(req, res) => {
    try{
        const result = await userServices.getAllUser();
        res.status(200).json({
            status: true,
            message: "All users fetched successfully",
            data: result
        });

    }catch(err) {
       res.status(500).json({ 
            status: false, 
            message: err.message 
        });
    }
}

export const userControllers = {
    createUser,
    loginUser,
    getAllUser,
}