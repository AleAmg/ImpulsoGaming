import Card from "../commons/Card";
import nahu from "./../assets/Nahu.png";

const arr = [
  {
    img: nahu,
    title: "Nahu",
    subtitle: "Un capo",
    text: "Nahu vel lorem non odio accumsan scelerisque. Nullam id augue velnibh soll.",
  },
  {
    img: nahu,
    title: "Nahu",
    subtitle: "Un capo",
    text: "Nahu vel lorem non odio accumsan scelerisque. Nullam id augue velnibh soll.",
  },
  {
    img: nahu,
    title: "Nahu",
    subtitle: "Un capo",
    text: "Nahu vel lorem non odio accumsan scelerisque. Nullam id augue velnibh soll.",
  },
];

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h1 className="aboutUs__title">About Us</h1>
      <span className="title--border"></span>
      <div className="aboutUs__header">
        <div className="aboutUs__header--element aboutUs__header--element--left">
          <h2 className="aboutUs__header--subtitle">Company Background</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ex,
            amet, quisquam magni quasi modi sint accusamus architecto velit
            veritatis nobis autem repellat dolore quis atque totam laudantium ab
            sed impedit beatae esse error culpa voluptatem eius et.
          </p>
          <br></br>
          <p>
            Aut, nulla, debitis voluptates doloribus quisquam maiores
            repudiandae nam culpa voluptatibus alias earum magnam numquam.
            Consectetur, ratione, ipsam totam et nesciunt atque temporibus fuga
            quos rem deserunt tempore dolore eaque dolorum a doloremque optio
            nihil pariatur aliquid ex id officiis aliquam sed.
          </p>
        </div>
        <div className="aboutUs__header--element aboutUs__header--element--right">
          <h2 className="aboutUs__header--subtitle">Our skills</h2>

          <div className="aboutUs__header--conteinerData">
            <h3 className="aboutUs__conteinerData--text aboutUs__conteinerData--text--90">
              DESING 90%
            </h3>
          </div>
          <div className="aboutUs__header--conteinerData">
            <h3 className="aboutUs__conteinerData--text aboutUs__conteinerData--text--75">
              HTML, CSS 75%
            </h3>
          </div>
          <div className="aboutUs__header--conteinerData">
            <h3 className="aboutUs__conteinerData--text aboutUs__conteinerData--text--85">
              WORDEXPRESS 85%
            </h3>
          </div>
          <div className="aboutUs__header--conteinerData ">
            <h3 className="aboutUs__conteinerData--text aboutUs__conteinerData--text--95">
              MARKETING 95%
            </h3>
          </div>
        </div>
      </div>
      <div className="card__container">
        {arr.map((element, i) => {
          return (
            <Card
              img={element.img}
              text={element.text}
              title={element.title}
              subtitle={element.subtitle}
              key={i}
            />
          );
        })}
        {/* <Card img={nahu} text={} title={} subtitle={} /> */}
      </div>
    </div>
  );
};

export default AboutUs;
