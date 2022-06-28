import rowRight from "./../assets/icons/rowRight.svg";
import rowLeft from "./../assets/icons/rowLeft.svg";
import { useEffect, useRef } from "react";
import { slide } from "./../assets/images.js";
const Carousel = () => {
  const slideShow = useRef(null);

  const back = () => {
    if (slideShow.current.children.length > 0) {
      console.log("back");

      const lastIndex = slideShow.current.children.length - 1;

      const lastElement = slideShow.current.children[lastIndex];

      slideShow.current.insertBefore(lastElement, slideShow.current.firstChild);

      slideShow.current.style.transition = "none";

      const slideLength = slideShow.current.children[0].offsetWidth;

      slideShow.current.style.transform = `translateX(-${slideLength}px)`;

      setTimeout(() => {
        slideShow.current.style.transition = "300ms ease-out all";
        slideShow.current.style.transform = "translateX(0)";
      }, 30);
    }
  };

  const next = () => {
    if (slideShow.current.children.length > 0) {
      const firstElement = slideShow.current.children[0];

      slideShow.current.style.transition = "300ms ease-out all";

      const slideLength = slideShow.current.children[0].offsetWidth;

      slideShow.current.style.transform = `translateX(-${slideLength}px)`;

      const traslateSlide = () => {
        slideShow.current.style.transition = "none";
        slideShow.current.style.transform = "translateX(0)";

        slideShow.current.appendChild(firstElement);

        slideShow.current.removeEventListener("transitionend", traslateSlide);
      };

      slideShow.current.addEventListener("transitionend", traslateSlide);
    }
  };

  useEffect(() => {
    setInterval(() => {
      next();
    }, 5000);
  }, []);

  return (
    <div className="carousel">
      <div className="contenedorSlideShow" ref={slideShow}>
        {slide.map((element, i) => {
          return (
            <div className="slide" key={i}>
              <a href="#xd">
                <img
                  className="slide--img"
                  src={element.src}
                  alt={element.src}
                ></img>
              </a>
              <div>
                <p className="slide--text">{element.txt}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="carousel__buttons">
        <button
          onClick={back}
          className="carousel--button carousel--button--left"
        >
          <img
            className="carousel__row--icon"
            src={rowLeft}
            alt="rowLeft"
          ></img>
        </button>
        <button
          onClick={next}
          className="carousel--button carousel--button--right"
        >
          <img
            className="carousel__row--icon"
            src={rowRight}
            alt="rowRight"
          ></img>
        </button>
      </div>
    </div>
  );
};
export default Carousel;
