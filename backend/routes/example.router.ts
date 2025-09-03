import { Router } from "express";
import { exampleFunction } from "../controllers/exampleController";

const router = Router();

router.get('/', exampleFunction)

export default router;