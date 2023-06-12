import express from "express"
import multer, { Multer } from "multer";
import { getUsers } from "../controllers/userController";

const multerConfig: Multer = multer();
const router = express.Router();

//GET ALL
router.post("/", multerConfig.single("file"), getUsers)

export default router;