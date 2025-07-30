import { Router } from "express";
import { SocialLinksController } from "./social.controller";

const router = Router();

// Routes
router.get("/", SocialLinksController.getSocialLinks);
router.put("/:id", SocialLinksController.updateSocialLinks);

// Export router
export const SocialRoutes = router;
