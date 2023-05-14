import mainService from "../services/main-service.js";
import httpStatus from "http-status";

export async function mainController(req, res) {
  try {
    const result = await mainService.mainLogic();
    res.status(httpStatus.OK).send(result);
  } catch (error) {
    if (error.name === "badRequesterror") {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }

    if (error.name === "notFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}
