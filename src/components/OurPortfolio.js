import LightBoxOurPortfolio from "../commons/LightBoxOurPortfolio";
import item1 from "./../assets/forOurPortfolio/item1.jpg";
import item2 from "./../assets/forOurPortfolio/item2.jpg";
import item3 from "./../assets/forOurPortfolio/item3.jpg";
import item4 from "./../assets/forOurPortfolio/item4.jpg";
import item5 from "./../assets/forOurPortfolio/item5.jpg";
import item6 from "./../assets/forOurPortfolio/item6.jpg";

const OurPortfolio = () => {
  return (
    <div className="ourPortfolio">
      <h1 className="ourPortfolio__title">Our Portfolio</h1>
      <span className="ourPortfolio__title--border"></span>
      <div className="ourPortfolio__images">
        <div className="ourPortfolio__images--conteiner">
          <a href="#img1">
            <img
              className="ourPortfolio__images--item"
              src={item1}
              alt="item1"
            ></img>
          </a>

          <a href="#img2">
            <img
              className="ourPortfolio__images--item"
              src={item2}
              alt="item2"
            ></img>
          </a>

          <a href="#img3">
            <img
              className="ourPortfolio__images--item"
              src={item3}
              alt="item2"
            ></img>
          </a>
        </div>

        <div className="ourPortfolio__images--conteiner">
          <a href="#img4">
            <img
              className="ourPortfolio__images--item"
              src={item4}
              alt="item2"
            ></img>
          </a>

          <a href="#img5">
            <img
              className="ourPortfolio__images--item"
              src={item5}
              alt="item2"
            ></img>
          </a>

          <a href="#img6">
            <img
              className="ourPortfolio__images--item"
              src={item6}
              alt="item2"
            ></img>
          </a>
        </div>
      </div>
      <LightBoxOurPortfolio />
    </div>
  );
};

export default OurPortfolio;
