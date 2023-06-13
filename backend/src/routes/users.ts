import express from "express"
import { getAll } from "../controllers/userController";

const router = express.Router();

//GET ALL USERS
router.get('/', getAll)

export default router;