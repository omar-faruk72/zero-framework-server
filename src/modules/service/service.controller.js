import { serviceServices } from "./service.service.js";

// post service api
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

// get all service api
const getAllServices = async (req, res) => {
    try {
        const result = await serviceServices.getAllServices();

        res.status(200).json({
            status: true,
            message: "Services fetched successfully!",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message || "Internal Server Error"
        });
    }
};

// get single services api 
const getSingleService = async (req, res) => {
    try {
        const { id } = req.params; 
        const result = await serviceServices.getSingleServices(id);

        if (!result) {
            return res.status(404).json({
                status: false,
                message: "Service not found!"
            });
        }

        res.status(200).json({
            status: true,
            message: "Service fetched successfully!",
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
    getAllServices,
    getSingleService,
};