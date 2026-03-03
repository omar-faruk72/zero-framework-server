import { ObjectId } from "mongodb";
import collections from "../../config/collections.js";
// service post api
const createService = async (serviceData) => {
    try {
        const result = await collections.serviceCollection.insertOne({
            ...serviceData,
            price: Number(serviceData.price), 
            createdAt: new Date()
        });
        return result;
    } catch (error) {
        throw new Error("Failed to create service: " + error.message);
    }
};

// all service get api
const getAllServices = async (page = 1, limit = 4) => {
    try {
        const skip = (page - 1) * limit;
                const result = await collections.serviceCollection
            .find({})
            .skip(skip)
            .limit(limit)
            .toArray();
        const totalServices = await collections.serviceCollection.countDocuments();
        const totalPages = Math.ceil(totalServices / limit);

        return {
            services: result,
            totalPages,
            currentPage: page,
            totalServices
        };
    } catch (error) {
        throw new Error("Failed to fetch services: " + error.message);
    }
};

// get single service 
const getSingleServices = async (id) => {
    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.serviceCollection.findOne(query);
        return result;
    } catch (error) {
        throw new Error("Invalid ID format or Service not found!");
    }
};

export const serviceServices = {
    createService,
    getAllServices,
    getSingleServices,
};