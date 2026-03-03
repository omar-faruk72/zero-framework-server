import { getDB } from "./db.js"

const collections = {
    get usersCollection() {
        return getDB().collection('users');
    },
    get serviceCollection() {
        return getDB().collection('services');
    }
};

export default collections;