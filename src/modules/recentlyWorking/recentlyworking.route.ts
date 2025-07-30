import { Router } from "express";
import { RecentlyWorkingController } from "./recentlyworking.controller";
import { upload } from "../../config/cloudinary.config";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

// Routes
router.post("/create", checkAuth(), upload.single("picture"), RecentlyWorkingController.createRecentlyWorking);
router.get("/", RecentlyWorkingController.getAllRecentlyWorking);
router.get("/:id", RecentlyWorkingController.getSingleRecentlyWorking);
router.put("/:id",checkAuth() ,RecentlyWorkingController.updateRecentlyWorking);
router.delete("/:id", checkAuth(), RecentlyWorkingController.deleteRecentlyWorking);

// Export router
export const RecentlyWorkingRoutes = router;
