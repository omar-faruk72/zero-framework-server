import collections from "../../config/collections"

const createUser = async(userData) => {
    const email = userData.email;
    try{
        const existingUser = await collections.usersCollection.findOne({email: email});

        if(existingUser) {
            const error = new Error("This email is already registered!");
            error.statusCode = 400;
            throw error;
        };

        const result = await collections.usersCollection.insertOne(userData);
        return result;
    }catch(err) {
        throw err;
    }
};

export const userServices = {
    createUser,
}