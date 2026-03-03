import { serviceServices } from "./service.service.js";

const createService = async (req, res) => {
    try {
        const result = await serviceServices.createService(req.body);
        res.status(201).json({
            status: true,
            message: "Service added successfully!",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
};

export const serviceControllers = {
    createService,
};