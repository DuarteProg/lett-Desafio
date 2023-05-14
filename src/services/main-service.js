import mainRepository from "../repositories/main-repository.js";
import { badRequestError } from "../erros/bad-request-error.js";
import { notFoundError } from "../erros/not-found-error.js";

async function tiTleLogic() {
  const titleResult = await mainRepository.showTitle();

  if (titleResult.length === 0) {
    throw notFoundError();
  }

  if (titleResult.length < 5) {
    throw badRequestError("O título é muito curto.");
  }

  return titleResult;
}

async function prizeLogic() {
  const prizeResult = await mainRepository.showPrize();

  if (prizeResult.length === 0) {
    throw notFoundError();
  }

  if (prizeResult.length < 1) {
    throw badRequestError("O preço é inválido.");
  }

  return prizeResult;
}

async function imageLogic() {
  const imageResult = await mainRepository.showImage();

  if (imageResult.length === 0) {
    throw notFoundError();
  }

  if (!imageResult.startsWith("https://")) {
    throw badRequestError();
  }

  return imageResult;
}

async function desriptionLogic() {
  const descriptionResult = await mainRepository.showDescription();

  if (descriptionResult.length === 0) {
    throw notFoundError();
  }

  if (descriptionResult.length < 10) {
    throw badRequestError("A descrição é muito curta.");
  }

  return descriptionResult;
}

const mainService = {
  tiTleLogic,
  prizeLogic,
  imageLogic,
  desriptionLogic,
};

export default mainService;
