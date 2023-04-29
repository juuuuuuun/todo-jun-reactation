import { elementMaps } from "../utils/elementMaps.js";
import Home from "../component-list/Home.js"

const getImageURLByTopic = (topic) =>
  `https://api.unsplash.com/photos/random?client_id=IrUZwNb2nokEOgkiU-cgvPAmCXYsDzuveSwNRIBiIOY&query=${topic}`;

export const getRandomImageURLByTopic = async () => {
  const response = await fetch(getImageURLByTopic("coffee")).then((res) =>
    res.json()
  ).catch((err) => {
    console.log(err);
  });
  // console.log(response);
  const backUrl = "https://i.pinimg.com/564x/f7/29/b2/f729b2f1ddc30895427cb201c0a6f566.jpg";
//   if(response){
//     elementMaps.footerBackgroundImgInfo.innerHTML = `⚙️ ${response.alt_description}`;
//     elementMaps.footerBackgroundImgInfo.location = `${response.links.html}`
//   }
  return response?.urls?.full ?? backUrl;
};
