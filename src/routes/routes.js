import { Router } from "express";
import mainRoute from "./main-route.js";

const router = Router();
router.use(mainRoute);

export default router;
