import axios from "axios";
import cheerio from "cheerio";

const url =
  "https://www.netshoes.com.br//tenis-olympikus-ultraleve-232g-feminino-off+white+coral-2I2-4961-205";
const response = await axios.get(url);
const html = response.data;
const $ = cheerio.load(html);

async function showTitle() {
  const title = $(
    "#content > div:nth-child(3) > section > div.short-showcase-description > section > h1"
  );
  const result = title.text();
  console.log(result);
  return result;
}

async function showPrize() {
  const prize = $(
    "#buy-box > div.if-available > div.price.price-box > div > span:nth-child(1) > strong"
  );
  const result = prize.text();
  console.log(result);
  return result;
}

async function showImage() {
  const image = $(
    "#content > div:nth-child(3) > section > section.photo > figure > img"
  );
  const result = image.attr("src");
  console.log(result);
  return result;
}

async function showDescription() {
  const description = $("#features > p");
  const result = description.text();
  console.log(result);
  return result;
}

const mainRepository = {
  showTitle,
  showPrize,
  showImage,
  showDescription,
};

export default mainRepository;
