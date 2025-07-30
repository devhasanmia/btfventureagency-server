import { Router } from "express";
import { ContactController } from "./contact.controller";

const router = Router();

// Routes
router.post("/send",ContactController.createContact);
router.get("/", ContactController.getAllContact);


// Export router
export const ContactRoutes = router;
