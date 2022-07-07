import img1 from "./forCarrousel/img1.jpg";
import img2 from "./forCarrousel/img2.jpg";

import item1 from "./forOurPortfolio/item1.jpg";
import item2 from "./forOurPortfolio/item2.jpg";
import item3 from "./forOurPortfolio/item3.jpg";
import item4 from "./forOurPortfolio/item4.jpg";
import item5 from "./forOurPortfolio/item5.jpg";
import item6 from "./forOurPortfolio/item6.jpg";

export const slide = [
  { src: img1, txt: "Fifa free" },
  { src: img2, txt: "Pes free" },
];

export const ligthImg = [
  { id: "img1", href1: "#img6", href2: "#img2", src: item1 },
  { id: "img2", href1: "#img1", href2: "#img3", src: item2 },
  { id: "img3", href1: "#img2", href2: "#img4", src: item3 },
  { id: "img4", href1: "#img3", href2: "#img5", src: item4 },
  { id: "img5", href1: "#img4", href2: "#img6", src: item5 },
  { id: "img6", href1: "#img5", href2: "#img1", src: item6 },
];