import { Router } from "express";
import { RecentlyWorkingController } from "./recentlyworking.controller";

const router = Router();

// Routes
router.post("/create", RecentlyWorkingController.createRecentlyWorking);
router.get("/", RecentlyWorkingController.getAllRecentlyWorking);
router.get("/:id", RecentlyWorkingController.getSingleRecentlyWorking);
router.patch("/:id", RecentlyWorkingController.updateRecentlyWorking);
router.delete("/:id", RecentlyWorkingController.deleteRecentlyWorking);

// Export router
export const RecentlyWorkingRoutes = router;
