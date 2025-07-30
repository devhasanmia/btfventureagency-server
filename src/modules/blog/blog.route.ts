import { Router } from "express";
import { upload } from "../../config/cloudinary.config";
import { BlogController } from "./blog.controller";

const router = Router();

// Routes
router.post("/create", upload.single("picture"), BlogController.createBlog);
router.get("/", BlogController.getAllBlogs);
router.get("/:id", BlogController.getSingleBlog);
router.put("/:id", BlogController.updateBlog);
router.delete("/:id", BlogController.deleteBlog);

// Export router
export const blogRoutes = router;
