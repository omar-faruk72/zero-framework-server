import { getDB } from "./db.js"

const collections = {
    get usersCollection() {
        return getDB().collection('users');
    },

    get dataPostCollection() {
        return getDB().collection('data_post');
    },
};

export default collections;