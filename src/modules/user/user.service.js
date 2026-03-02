import collections from "../../config/collections.js";
import bcrypt from 'bcryptjs';
const createUser = async(userData) => {
    const email = userData.email;
    const password = userData.password;
    try{
        const existingUser = await collections.usersCollection.findOne({email: email});
        // duplicate use not allawortd
        if(existingUser) {
            const error = new Error("This email is already registered!");
            error.statusCode = 400;
            throw error;
        };

        // password hash
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // new user
        const newUser = {
            ...userData,
            password: hashedPassword,
            created_at: new Date(),
            role: 'user'
        }

        const result = await collections.usersCollection.insertOne(newUser);
        return result;
    }catch(err) {
        throw err;
    }
};

export const userServices = {
    createUser,
}