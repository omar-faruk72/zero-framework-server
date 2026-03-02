import collections from "../../config/collections.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from "../../config/index.js";
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

const loginUser = async(loginData) => {
    const {email, password} = loginData;
    try{
        const user = await collections.usersCollection.findOne({email});
// email not valid
        if(!user){
const error = new Error("User not found!");
            error.statusCode = 404;
            throw error;      
          }

        //   password chake 
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        // hasd password not valid
        if(!isPasswordMatch){
            const error = new Error("Invalid password!");
            error.statusCode = 401; 
            throw error;
        };

        // jwt cretated
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role
        };
        // token janaret
        const token = jwt.sign(
            payload,
            config.jwt_secret,
            {expiresIn: config.jwt_expires_in}
        );

        const { password: _, ...userWithoutPassword } = user;
        return {user: userWithoutPassword, token};

    }catch(err){
        throw err;
    }
}

export const userServices = {
    createUser,
    loginUser,
}