import { Router } from "express";
import { ServiceController } from "./services.controller";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

// Routes
router.post("/create", checkAuth(), ServiceController.createService);
router.get("/", ServiceController.getAllServices);
router.get("/:id", ServiceController.getSingleService);
router.put("/:id", checkAuth(), ServiceController.updateService);
router.delete("/:id",checkAuth(), ServiceController.deleteService);

// Export router
export const ServiceRoutes = router;
