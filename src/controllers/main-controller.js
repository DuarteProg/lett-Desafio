import axios from "axios";
import cheerio from "cheerio";
import mainService from "../services/main-service.js";

export async function mainController(req, res) {
  try {
    const result = await mainService.mainLogic();
    res.status(200).send(result);
  } catch (error) {}
}
