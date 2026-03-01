import { dataPostService } from "./data-post.service.js";

const createPost = async(req, res) => {
    try{
        const postData = req.body;
        const result = await dataPostService.createPost(postData);
        res.status(201).send({
            success: true,
            message: "Data successfully post",
            data: result,
        })
    }catch(err){
        res.status(500).send({
            success: false,
            message: err.message
        });
    };
};


export const dataPostController = {
    createPost,
}