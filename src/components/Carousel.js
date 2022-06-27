import img1 from "./../assets/forCarrousel/img1.jpg";
import img2 from "./../assets/forCarrousel/img2.jpg";
import rowRight from "./../assets/icons/rowRight.svg";
import rowLeft from "./../assets/icons/rowLeft.svg";
const Carousel = () => {
  return (
    <div>
      <div className="contenedorSlideShow">
        <div className="slide">
          <a href="#xd">
            <img src={img1} alt="img1"></img>
          </a>
          <div>
            <p>Torneos free</p>
          </div>
        </div>
        <div className="slide" >
          <a href="#xd">
            <img src={img2} alt="img2"></img>
          </a>
          <div>
            <p>Torneos free</p>
          </div>
        </div>
      </div>

      <div>
        <button>
          <img src={rowLeft} alt="rowLeft"></img>
        </button>
        <button>
          <img src={rowRight} alt="rowRight"></img>
        </button>
      </div>
    </div>
  );
};
export default Carousel;
