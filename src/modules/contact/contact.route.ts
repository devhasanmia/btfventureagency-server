import { Router } from "express";
import { ContactController } from "./contact.controller";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

// Routes
router.post("/send", checkAuth(),ContactController.createContact);
router.get("/", ContactController.getAllContact);


// Export router
export const ContactRoutes = router;
