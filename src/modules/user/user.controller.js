import { userServices } from "./user.service"

const createUser = async(req, res) => {
    try{
        const result = await userServices.createUser(req.body);
        res.statuse(201).json({
            status: true,
            data: result
        });
    }catch(err){
        res.statuse(err.statuseCode || 500).json({
            status: false,
            message: err.message
        })
    }
};

export const userControllers = {
    createUser,
}