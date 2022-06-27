import { useEffect, useState } from "react";
import fb from "./../assets/icons/fb.svg";
import ig from "./../assets/icons/ig.svg";
import tw from "./../assets/icons/tw.svg";
import mail from "./../assets/icons/mail.svg";
import phone from "./../assets/icons/phone.svg";
import menu from "./../assets/icons/menu.svg";
import Dropdown from "./Dropdown";
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
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <img className="icon--networks" src={fb} alt="fb"></img>
          </a>

          <a
            href="https://www.instagram.com/impulsodeportivo_ok/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon--networks" src={ig} alt="ig"></img>
          </a>

          <a href="https://www.google.com" target="_blank" rel="noreferrer">
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
          <div className="row__link">
            <a className="row__link--item" href="#external">
              External
            </a>
          </div>
        </div>
      </div>
      {drop && <Dropdown onClick={() => setDrop(false)} />}
    </div>
  );
};

export default Navbar;

/* 
<div id="home">
        
   <div className="site-header">
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="left-header">
                  <span>
                    <i className="fa fa-phone"></i>080 080 0990
                  </span>
                  <span>
                    <i className="fa fa-envelope"></i>info@company.com
                  </span>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="right-header text-right">
                  <ul className="social-icons">
                    <li>
                      <a href="https://www.google.com" className="fa fa-facebook">
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com" className="fa fa-instagram">
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com" className="fa fa-twitter">
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com" className="fa fa-google-plus">
                        {" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-6">
                <div className="logo">
                  <h1>
                    <a href="# " title="Dreri">
                      Compass
                    </a>
                  </h1>
                </div>
              </div>

              <div className="col-md-8 col-sm-8 col-xs-6">
                <div className="menu text-right hidden-sm hidden-xs">
                  <ul>
                    <li>
                      <a href="https://www.google.com" className="external">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                    <li>
                      <a
                        href="http://www.facebook.com/templatemo"
                        className="external"
                      >
                        External
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="responsive-menu text-right visible-xs visible-sm">
              <a href=" " className="toggle-menu fa fa-bars">
                {" "}
              </a>
              <div className="menu">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a
                      href="http://www.facebook.com/templatemo"
                      className="external"
                    >
                      External
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>

      <div className="flexslider">
        <ul className="slides">
          <li>
            <img src="/images/banner01.jpg" alt="" />
            <div className="flex-caption">
              <h2>Compass Template</h2>
              <span></span>
              <p>
                Praesent tincidunt neque semper elementum gravida. Donec id
                euismod magna.
                <br />
                Ut erat ligula, malesuada eu quam a, fringilla auctor augue.
              </p>
            </div>
          </li>
          <li>
            <img src="./images/banner02.jpg" alt="" />
            <div className="flex-caption">
              <h2>Responsive Mobile</h2>
              <span></span>
              <p>
                Ea, similique, odit id consectetur est beatae quia dicta
                officiis ipsam itaque in
                <br />
                facilis aliquid quas officia voluptatem repellendus repellat!
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div id="services" className="section-cotent">
        <div className="container">
          <div className="title-section text-center">
            <h2>Our Services</h2>
            <span></span>
          </div>

          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="service-item">
                <div className="service-header">
                  <i className="fa fa-umbrella"></i>
                  <h3>Clean Design</h3>
                </div>
                <div className="service-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestiae, sapiente, saepe, velit, repellendus doloribus
                  blanditiis repudiandae nobis optio quasi nulla aliquam nisi
                  voluptatibus.
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="service-item">
                <div className="service-header">
                  <i className="fa fa-desktop"></i>
                  <h3>Fully Responsive</h3>
                </div>
                <div className="service-description">
                  <a
                    rel="nofollow"
                    href="http://www.templatemo.com/tm-454-compass"
                    target="_parent"
                  >
                    Compass x
                   </a>
                  is free responsive website template from templatemo. You can
                  download and use this template for your websites. Please tell
                  your friends about our website. Thank you for visiting us.
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="service-item">
                <div className="service-header">
                  <i className="fa fa-cogs"></i>
                  <h3>Easy Editing</h3>
                </div>
                <div className="service-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestiae, sapiente, saepe, velit, repellendus doloribus
                  blanditiis repudiandae nobis optio quasi nulla aliquam nisi
                  voluptatibus.
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="service-item">
                <div className="service-header">
                  <i className="fa fa-heart"></i>
                  <h3>Fast Support</h3>
                </div>
                <div className="service-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestiae, sapiente, saepe, velit, repellendus doloribus
                  blanditiis repudiandae nobis optio quasi nulla aliquam nisi
                  voluptatibus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" className="section-content">
        <div className="container">
          <div className="title-section text-center">
            <h2>Our Portfolio</h2>
            <span></span>
          </div>

          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="portfolio-thumb">
                <img src="/images/portfolio/item1.jpg" alt="Portfolio Item 1" />
                <div className="overlay">
                  <div className="inner">
                    <h4>
                      <a data-rel="lightbox" href="/images/portfolio/item1.jpg">
                        Nulla non enim x
                       </a>
                    </h4>
                    <span>Design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="portfolio-thumb">
                <img src="/images/portfolio/item2.jpg" alt="Portfolio Item 2" />
                <div className="overlay">
                  <div className="inner">
                    <h4>
                      <a data-rel="lightbox" href="/images/portfolio/item2.jpg">
                        Duis nec urna x
                       </a>
                    </h4>
                    <span>Creative</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="portfolio-thumb">
                <img src="/images/portfolio/item3.jpg" alt="Portfolio Item 3" />
                <div className="overlay">
                  <div className="inner">
                    <h4>
                      <a data-rel="lightbox" href="/images/portfolio/item3.jpg">
                        Etiam magna x
                       </a>
                    </h4>
                    <span>Design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="portfolio-thumb">
                <img src="/images/portfolio/item4.jpg" alt="Portfolio Item 4" />
                <div className="overlay">
                  <div className="inner">
                    <h4>
                      <a data-rel="lightbox" href="/images/portfolio/item4.jpg">
                        Vivamus dignissim x
                       </a>
                    </h4>
                    <span>Creative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="portfolio-thumb">
                <img src="/images/portfolio/item5.jpg" alt="Portfolio Item 5" />
                <div className="overlay">
                  <div className="inner">
                    <h4>
                      <a data-rel="lightbox" href="/images/portfolio/item5.jpg">
                        Fusce semper x
                       </a>
                    </h4>
                    <span>HTML CSS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="portfolio-thumb">
                <img src="/images/portfolio/item6.jpg" alt="Portfolio Item 6" />
                <div className="overlay">
                  <div className="inner">
                    <h4>
                      <a data-rel="lightbox" href="/images/portfolio/item6.jpg">
                        Nunc ultrices x
                       </a>
                    </h4>
                    <span>Mobile</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="portfolio-thumb">
                <img src="/images/portfolio/item7.jpg" alt="Portfolio Item 7" />
                <div className="overlay">
                  <div className="inner">
                    <h4>
                      <a data-rel="lightbox" href="/images/portfolio/item7.jpg">
                        Fusce vehicula x
                       </a>
                    </h4>
                    <span>HTML CSS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="portfolio-thumb">
                <img src="/images/portfolio/item8.jpg" alt="Portfolio Item 8" />
                <div className="overlay">
                  <div className="inner">
                    <h4>
                      <a data-rel="lightbox" href="/images/portfolio/item8.jpg">
                        Vivamus elementum x
                       </a>
                    </h4>
                    <span>Mobile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="section-cotent">
        <div className="container">
          <div className="title-section text-center">
            <h2>About Us</h2>
            <span></span>
          </div>

          <div className="row">
            <div className="col-md-8">
              <h4 className="widget-title">Company Background</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
                ex, amet, quisquam magni quasi modi sint accusamus architecto
                velit veritatis nobis autem repellat dolore quis atque totam
                laudantium ab sed impedit beatae esse error culpa voluptatem
                eius et. <br />
                <br />
                Aut, nulla, debitis voluptates doloribus quisquam maiores
                repudiandae nam culpa voluptatibus alias earum magnam numquam.
                Consectetur, ratione, ipsam totam et nesciunt atque temporibus
                fuga quos rem deserunt tempore dolore eaque dolorum a doloremque
                optio nihil pariatur aliquid ex id officiis aliquam sed.
              </p>
            </div>

            <div className="col-md-4 our-skills">
              <h4 className="widget-title">Our Skills</h4>
              <ul className="progess-bars">
                <li>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      Design 90%
                    </div>
                  </div>
                </li>
                <li>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      HTML CSS 75%
                    </div>
                  </div>
                </li>
                <li>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      WordPress 85%
                    </div>
                  </div>
                </li>
                <li>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      Marketing 95%
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="our-team">
              <div className="col-md-4 col-sm-6">
                <div className="team-member">
                  <div className="member-img">
                    <img src="/images/team/member-1.jpg" alt="Tracy" />
                    <div className="overlay">
                      <ul className="social">
                        <li>
                          <a href="https://www.google.com" className="fa fa-facebook">
                            x
                           </a>
                        </li>
                        <li>
                          <a href="https://www.google.com" className="fa fa-twitter">
                            x
                           </a>
                        </li>
                        <li>
                          <a href="https://www.google.com" className="fa fa-instagram">
                            x
                           </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="inner-content">
                    <h5>Tracy One</h5>
                    <span>Product Developer</span>
                    <p>
                      Mauris vel lorem non odio accumsan scelerisque. Nullam id
                      augue vel nibh soll.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="team-member">
                  <div className="member-img">
                    <img src="/images/team/member-2.jpg" alt="Mary" />
                    <div className="overlay">
                      <ul className="social">
                        <li>
                          <a href="https://www.google.com" className="fa fa-facebook">
                            x
                           </a>
                        </li>
                        <li>
                          <a href="https://www.google.com" className="fa fa-twitter">
                            x
                           </a>
                        </li>
                        <li>
                          <a href="https://www.google.com" className="fa fa-instagram">
                            x
                           </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="inner-content">
                    <h5>Mary Two</h5>
                    <span>Product Designer</span>
                    <p>
                      Mauris vel lorem non odio accumsan scelerisque. Nullam id
                      augue vel nibh soll.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="team-member">
                  <div className="member-img">
                    <img src="/images/team/member-3.jpg" alt="Julia" />
                    <div className="overlay">
                      <ul className="social">
                        <li>
                          <a href="https://www.google.com" className="fa fa-facebook">
                            x
                           </a>
                        </li>
                        <li>
                          <a href="https://www.google.com" className="fa fa-twitter">
                            x
                           </a>
                        </li>
                        <li>
                          <a href="https://www.google.com" className="fa fa-instagram">
                            x
                           </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="inner-content">
                    <h5>Julia Three</h5>
                    <span>Product Manager</span>
                    <p>
                      Mauris vel lorem non odio accumsan scelerisque. Nullam id
                      augue vel nibh soll.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="section-cotent">
        <div className="container">
          <div className="title-section text-center">
            <h2>Contact Us</h2>
            <span></span>
          </div>

          <div className="row">
            <div className="col-md-7 col-sm-6">
              <h4 className="widget-title">Send a message to us</h4>
              <div className="contact-form">
                <p className="full-row">
                  <label for="name-id">Your Name:</label>
                  <input type="text" id="name-id" name="name-id" />
                </p>
                <p className="full-row">
                  <label for="email-id">Email:</label>
                  <input type="text" id="email-id" name="email-id" />
                </p>
                <p className="full-row">
                  <label for="subject-id">Subject:</label>
                  <input type="text" id="subject-id" name="subject-id" />
                </p>
                <p className="full-row">
                  <label for="message">Message:</label>
                  <textarea name="message" id="message" rows="6"></textarea>
                </p>
                <input
                  className="mainBtn"
                  type="submit"
                  name=""
                  value="Send Message"
                />
              </div>
            </div>

            <div className="col-md-5 col-sm-6">
              <h4 className="widget-title">Our location</h4>
              <div className="map-holder">
                <div className="google-map-canvas" id="map-canvas"></div>
              </div>

              <div className="contact-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam, modi, non ducimus nesciunt in commodi similique
                  aliquam omnis ea at!
                </p>
                <span>
                  <i className="fa fa-home"></i>850 In luctus justo vel nisi,
                  Duis mattis 10440
                </span>
                <span>
                  <i className="fa fa-phone"></i>080-080-0990
                </span>
                <span>
                  <i className="fa fa-envelope"></i>info@company.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8 col-xs-12">
              <p>Copyright &copy; 2084 Company Name</p>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="go-top">
                <a href="https://www.google.com" id="go-top">
                  <i className="fa fa-angle-up"></i>
                  Back to Top x
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
*/
