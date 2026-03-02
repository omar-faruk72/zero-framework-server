import { Router } from "express";
import { userControllers } from "./user.controller.js";

const router = Router();

router.post('/register', userControllers.createUser);

router.post('/login', userControllers.loginUser);

router.get('/all-users', userControllers.getAllUser);

export const userRouter = router;