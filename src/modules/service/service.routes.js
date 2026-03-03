import { Router } from "express";
import { serviceControllers } from "./service.controller.js";

const router = Router();

router.post("/add-services", serviceControllers.createService);

router.get("/all-services", serviceControllers.getAllServices);

router.get("/service/:id", serviceControllers.getSingleService);
export const serviceRouters = router;