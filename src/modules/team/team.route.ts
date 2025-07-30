import { Router } from "express";
import { TeamController } from "./team.controller";
import { upload } from "../../config/cloudinary.config";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

// Routes
router.post("/create", checkAuth(), upload.single("picture"), TeamController.createTeamMember);
router.get("/", TeamController.getAllTeamMembers);
router.get("/:id", TeamController.getSingleTeamMember);
router.put("/:id", checkAuth(), TeamController.updateTeamMember);
router.delete("/:id", checkAuth(), TeamController.deleteTeamMember);

// Export router
export const TeamRoutes = router;
