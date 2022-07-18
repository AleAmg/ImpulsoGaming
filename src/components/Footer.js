import logo from "./../assets/logotipe.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__item">
        <div className="footer__contacts">
          <img className="footer__logo" src={logo} alt="img"></img>
        </div>
        <div className="footer__contacts">
          <h1 className="footer__top--contacts">E-mail:</h1>
          <h2 className="footer__text">impulsook@gmail.com</h2>
        </div>
        <div className="footer__contacts">
          <h1 className="footer__top--contacts">Síguenos:</h1>

          <div className="footer__links--container">
            <a
              href="https://www.instagram.com/impulsodeportivo_ok/"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="footer__links footer__text">Facebook</h2>
            </a>
            <a
              href="https://www.instagram.com/impulsodeportivo_ok/"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="footer__links footer__text">Instagram</h2>
            </a>
            <a
              href="https://www.instagram.com/impulsodeportivo_ok/"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="footer__links footer__text">Twitter</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__item">
        <p>Copyright © 2022 Impulso Gaming</p>
      </div>
    </div>
  );
};

export default Footer;
