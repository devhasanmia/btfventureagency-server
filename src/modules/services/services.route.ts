import { Router } from "express";
import { ServiceController } from "./services.controller";

const router = Router();

// Routes
router.post("/create", ServiceController.createService);
router.get("/", ServiceController.getAllServices);
router.get("/:id", ServiceController.getSingleService);
router.patch("/:id", ServiceController.updateService);
router.delete("/:id", ServiceController.deleteService);

// Export router
export const ServiceRoutes = router;
