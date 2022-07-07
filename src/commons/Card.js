const Card = ({ img, title, subtitle, text }) => {
  return (
    <div className="card" >
      <img className="card__image" src={img} alt={title}></img>
      <div className="card__description">
        <h1 className="card__title">{title}</h1>
        <h2 className="card__subtitle">{subtitle}</h2>
        <p className="card__text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
