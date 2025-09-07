import { Router } from "express";
import { exampleFunction } from "../controllers/example.controller";

const router = Router();

router.get('/', exampleFunction)

export default router;