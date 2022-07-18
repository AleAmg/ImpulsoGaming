import { useEffect, useState } from "react";
import fb from "./../assets/icons/fb.svg";
import ig from "./../assets/icons/ig.svg";
import tw from "./../assets/icons/tw.svg";
import mail from "./../assets/icons/mail.svg";
import phone from "./../assets/icons/phone.svg";
import menu from "./../assets/icons/menu.svg";
import Dropdown from "../commons/Dropdown";
import { useLocation } from "react-router";
const Navbar = () => {
  const locate = useLocation();
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    setDrop(false);
  }, [locate]);

  return (
    <div className="navbar">
      <div className="navbar__contactMe">
        <div className="navbar__contactMe--contacts">
          <div className="navbar__contacts--icon">
            <img className="icon--contacts" src={phone} alt="contacts"></img>
            <p>+54 9 11 9999-9999</p>
          </div>
          <div className="navbar__contacts--icon ">
            <img className="icon--contacts" src={mail} alt="maill"></img>
            <p>example@mail.com</p>
          </div>
        </div>
        <div className="navbar__contactMe--networks">
          <a
            href="https://www.instagram.com/impulsodeportivo_ok/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon--networks" src={fb} alt="fb"></img>
          </a>

          <a
            href="https://www.instagram.com/impulsodeportivo_ok/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon--networks" src={ig} alt="ig"></img>
          </a>

          <a
            href="https://www.instagram.com/impulsodeportivo_ok/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon--networks" src={tw} alt="tw"></img>
          </a>
        </div>
      </div>
      <div className="navbar__menu">
        <div className="navbar__icon"></div>
        <div className="navbar__burger">
          <button
            onClick={drop ? () => setDrop(false) : () => setDrop(true)}
            className="navbar__menu--burger"
          >
            <img className="icon--menu" src={menu} alt="menu"></img>
          </button>
        </div>
        <div className="navbar__row">
          <div className="row__link">
            <a className="row__link--item" href="#home">
              Home
            </a>
          </div>
          <div className="row__link">
            <a className="row__link--item" href="#services">
              Services
            </a>
          </div>
          <div className="row__link">
            <a className="row__link--item" href="#portfolio">
              Portfolio
            </a>
          </div>
          <div className="row__link">
            <a className="row__link--item" href="#about">
              About
            </a>
          </div>
          <div className="row__link">
            <a className="row__link--item" href="#contact">
              Contact
            </a>
          </div>
          {/* <div className="row__link">
            <a className="row__link--item" href="#external">
              External
            </a>
          </div> */}
        </div>
      </div>
      {drop && <Dropdown onClick={() => setDrop(false)} />}
    </div>
  );
};

export default Navbar;
