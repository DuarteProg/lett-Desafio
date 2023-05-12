import axios from "axios";
import cheerio from "cheerio";

export async function mainController(req, res) {
  const url = "https://www.netshoes.com.br/";
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const title = $("title").text();
    console.log(title);

    res.status(200).send(title);
  } catch (error) {}
}