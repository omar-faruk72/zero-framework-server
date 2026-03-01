import { Router } from "express";
import { dataPostController } from "./data-post.controller.js";

const router = Router();

router.post('/', dataPostController.createPost);

export const dataPostRoutes = router;