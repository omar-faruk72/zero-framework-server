import collections from "../../config/collections.js"

const createPost = async(postData) => {
    const result = await collections.dataPostCollection.insertOne(postData);
    return result;
};

export const dataPostService = {
    createPost,
}