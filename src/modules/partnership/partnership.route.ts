import { Router } from "express";
import { PartnershipController } from "./partnership.controller";
import { upload } from "../../config/cloudinary.config";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

// Routes
router.post("/create",checkAuth(), upload.single("logo"), PartnershipController.createPartnership);
router.get("/", PartnershipController.getAllPartnerships);
router.delete("/:id",checkAuth(), PartnershipController.deletePartnership);


// Export router
export const PartnershipRoutes = router;
