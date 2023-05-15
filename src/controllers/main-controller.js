import mainService from "../services/main-service.js";
import httpStatus from "http-status";

export async function mainController(req, res) {
  try {
    const title = await mainService.tiTleLogic();
    const prize = await mainService.prizeLogic();
    const image = await mainService.imageLogic();
    const description = await mainService.desriptionLogic();

    res.status(httpStatus.OK).send({
      Titulo: title,
      Preço: prize,
      Imagem: image,
      Descrição: description,
    });
  } catch (error) {
    if (error.name === "badRequesterror") {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    if (error.name === "notFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
  }
}
