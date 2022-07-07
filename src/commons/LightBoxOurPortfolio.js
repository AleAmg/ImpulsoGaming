import arrowLeft from "./../assets/icons/arrowLeft.svg";
import arrowRight from "./../assets/icons/arrowRight.svg";
import cross from "./../assets/icons/cross.svg";
import { ligthImg } from "../assets/images";
const LightBoxOurPortfolio = () => {
  return (
    <div>
      {ligthImg.map((image, i) => {
        return (
          <div className="ourPortfolio__light-box" id={image.id} key={i}>
            <a href={image.href1} className="buttonNext">
              <img
                className="light-box--button"
                src={arrowLeft}
                alt="rowLeft"
              ></img>
            </a>
            <img
              className="ourPortfolio__light-box--images"
              src={image.src}
              alt={image.id}
            ></img>
            <a href={image.href2} className="buttonNext">
              <img
                className="light-box--button"
                src={arrowRight}
                alt="rowRight"
              ></img>
            </a>
            <a href="#img" className="ourPortfolio__light-box--close ">
              <img className="light-box--close" src={cross} alt="cross"></img>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default LightBoxOurPortfolio;
