import mainRepository from "../repositories/main-repository.js";

async function mainLogic() {
  const titleResult = await mainRepository.showTitle();
  const prizeResult = await mainRepository.showPrize();
  const imageResult = await mainRepository.showImage();
  const descriptionResult = await mainRepository.showDescription();
  
  if (prizeResult.length === 0) {
    throw new Error('Elemento de preço não encontrado');
  }
  

  



  
  
  return {
    Titulo: titleResult,
    Preço: prizeResult,
    Imagem: imageResult,
    Descrição: descriptionResult,
  };
}

const mainService = {
  mainLogic,
};

export default mainService;
