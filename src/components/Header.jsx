import { RiCelsiusFill, RiFahrenheitFill } from "../index";
import logo from "../assets/logo-weather.png";
const Header = (prop) => {
  return (
    <>
      <header>
        <nav>
          <img className="logo" src={logo} alt="logo" />
          <div className={`unit__toggler ${prop.weather ? "visible" : null}`}>
            <RiCelsiusFill
              onClick={prop.active}
              className={`icon__unit ${prop.unit ? "active__unit" : null}`}
            />
            <RiFahrenheitFill
              onClick={prop.active}
              className={`icon__unit ${!prop.unit ? "active__unit" : null}`}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
