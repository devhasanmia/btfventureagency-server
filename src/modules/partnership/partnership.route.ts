import { Router } from "express";
import { PartnershipController } from "./partnership.controller";
import { upload } from "../../config/cloudinary.config";

const router = Router();

// Routes
router.post("/create", upload.single("logo"), PartnershipController.createPartnership);
router.get("/", PartnershipController.getAllPartnerships);
router.delete("/:id", PartnershipController.deletePartnership);


// Export router
export const PartnershipRoutes = router;
