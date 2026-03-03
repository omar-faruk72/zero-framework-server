import { Router } from "express";
import { serviceControllers } from "./service.controller.js";

const router = Router();

router.post("/add-services", serviceControllers.createService);

export const serviceRouters = router;