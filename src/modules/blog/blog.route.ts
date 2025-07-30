import { Router } from "express";
import { upload } from "../../config/cloudinary.config";
import { BlogController } from "./blog.controller";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

// Routes
router.post("/create",checkAuth(), upload.single("picture"), BlogController.createBlog);
router.get("/", BlogController.getAllBlogs);
router.get("/:id", BlogController.getSingleBlog);
router.put("/:id",checkAuth(), BlogController.updateBlog);
router.delete("/:id", checkAuth(),BlogController.deleteBlog);

// Export router
export const blogRoutes = router;
