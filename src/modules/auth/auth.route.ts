import { Router } from "express";
import { AuthController } from "./auth.controller";
const router = Router();

router.post("/login", AuthController.login);
router.post("/refresh-token", AuthController.getNewAccessToken);
router.post("/logout", AuthController.logout)





export const authRoutes = router;