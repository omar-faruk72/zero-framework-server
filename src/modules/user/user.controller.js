import { userServices } from "./user.service.js"

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
}

export const userControllers = {
    createUser,
    loginUser,
}