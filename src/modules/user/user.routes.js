import { Router } from "express";
import { userControllers } from "./user.controller.js";
import { authGuard, isAdmin } from "../../middleware/auth.middleware.js";

const router = Router();

router.post('/register', userControllers.createUser);

router.post('/login', userControllers.loginUser);

router.get('/all-users', authGuard, isAdmin, userControllers.getAllUser);

export const userRouter = router;