import { Router } from "express";
import { SocialLinksController } from "./social.controller";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

// Routes
router.get("/", SocialLinksController.getSocialLinks);
router.put("/:id",checkAuth(),SocialLinksController.updateSocialLinks);

// Export router
export const SocialRoutes = router;
