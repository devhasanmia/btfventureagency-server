import { Router } from "express";
import { TeamController } from "./team.controller";

const router = Router();

// Routes
router.post("/create", TeamController.createTeamMember);
router.get("/", TeamController.getAllTeamMembers);
router.get("/:id", TeamController.getSingleTeamMember);
router.patch("/:id", TeamController.updateTeamMember);
router.delete("/:id", TeamController.deleteTeamMember);

// Export router
export const TeamRoutes = router;
