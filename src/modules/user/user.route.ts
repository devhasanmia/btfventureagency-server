import { Router } from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { UserSchema } from "./user.validation";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "./user.interface";

const router = Router();



router.post("/register", validateRequest(UserSchema), UserController.createUser);
router.get("/get-all-user", checkAuth(Role.ADMIN, Role.USER), UserController.getAllUser);

export const UserRoutes = router 