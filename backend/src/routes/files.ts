import express from "express"
import multer, { Multer } from "multer";
import { addFile} from "../controllers/fileController";

const multerConfig: Multer = multer();
const router = express.Router();

//POST NEW FILE
router.post("/", multerConfig.single("file"), addFile)

export default router;