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

export const userControllers = {
    createUser,
}