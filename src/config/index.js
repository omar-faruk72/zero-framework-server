import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT,
    mongodb_str: process.env.MONGO_DB_URL,
};
export default config;