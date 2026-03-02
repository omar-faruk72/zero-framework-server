import { Router } from "express";
import { userControllers } from "./user.controller.js";

const router = Router();

router.post('/', userControllers.createUser);


export const userRouter = router;