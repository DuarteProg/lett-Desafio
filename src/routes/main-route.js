import { Router } from "express";
import { mainController } from "../controllers/main-controller.js";

const mainRoute = Router();

mainRoute.get("/main", mainController);

export default mainRoute;
