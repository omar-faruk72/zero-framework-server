import collections from "../../config/collections.js";

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

export const serviceServices = {
    createService
};