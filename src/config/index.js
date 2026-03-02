import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT,
    mongodb_str: process.env.MONGO_DB_URL,
    jwt_secret: process.env.JWT_SECRET,
    jwt_expires_in: process.env.JWT_EXPIRES_IN
};
export default config;