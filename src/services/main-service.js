import mainRepository from "../repositories/main-repository.js";

async function mainLogic() {
  const result = await mainRepository.showTitle();
  return result;
}

const mainService = {
  mainLogic,
};

export default mainService