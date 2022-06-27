import img1 from "./../assets/forCarrousel/img1.jpg";
import img2 from "./../assets/forCarrousel/img2.jpg";
import rowRight from "./../assets/icons/rowRight.svg";
import rowLeft from "./../assets/icons/rowLeft.svg";
const Carousel = () => {
  return (
    <div className="carousel">
      <div className="contenedorSlideShow">
        <div className="slide">
          <a href="#xd">
            <img className="slide--img" src={img1} alt="img1"></img>
          </a>
          <div>
            <p className="slide--text">Torneos free</p>
          </div>
        </div>
        <div className="slide">
          <a href="#xd">
            <img className="slide--img" src={img2} alt="img2"></img>
          </a>
          <div>
            <p className="slide--text">Torneos free</p>
          </div>
        </div>
      </div>
      <div className="carousel__buttons">
        <button className="carousel--button carousel--button--left">
          <img className="carousel__row--icon" src={rowLeft} alt="rowLeft"></img>
        </button>
        <button className="carousel--button carousel--button--right">
          <img className="carousel__row--icon" src={rowRight} alt="rowRight"></img>
        </button>
      </div>
    </div>
  );
};
export default Carousel;
