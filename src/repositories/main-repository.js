import axios from "axios";
import cheerio from "cheerio";

const url = "https://www.netshoes.com.br/";
const response = await axios.get(url);
const html = response.data;
const $ = cheerio.load(html);

async function showTitle(){
    const title = $("title").text();
    console.log(title)
    return title;
}

async function showPrize(){
    
}

async function showImage(){
    
}

async function showDescription(){
    
}

const mainRepository = {
    showTitle,
    showPrize,
    showImage,
    showDescription
}

export default mainRepository;