import axios from "axios";
import cheerio from "cheerio";
import mainRepository from "../repositories/main-repository.js";

export async function mainController(req, res) {
  const url = "https://www.netshoes.com.br/";
  try {
    // const response = await axios.get(url);
    // const html = response.data;
    // const $ = cheerio.load(html);

    // const title = $("title").text();
    // console.log(title);
    const opa = await mainRepository.showTitle();

    res.status(200).send(opa);
  } catch (error) {}
}