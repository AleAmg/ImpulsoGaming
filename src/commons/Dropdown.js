const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown__link">
        <a className="dropdown__link--item" href="#home">
          Home
        </a>
      </div>
      <div className="dropdown__link">
        <a className="dropdown__link--item" href="#services">
          Services
        </a>
      </div>
      <div className="dropdown__link">
        <a className="dropdown__link--item" href="#portfolio">
          Portfolio
        </a>
      </div>
      <div className="dropdown__link">
        <a className="dropdown__link--item" href="#about">
          About
        </a>
      </div>
      <div className="dropdown__link">
        <a className="dropdown__link--item" href="#contact">
          Contact
        </a>
      </div>
      {/* <div className="dropdown__link">
        <a className="dropdown__link--item" href="#external">
          External
        </a>
      </div> */}
    </div>
  );
};
export default Dropdown;
