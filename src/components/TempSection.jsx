import { IoLocationOutline } from "../index";
const TempSection = (prop) => {
  const nightImg = prop.temp.list[0].weather[0].icon;
  const dayImg = nightImg.replace("n", "d");
  return (
    <>
      <section className="temp__section">
        <div>Aujourd&apos;hui</div>
        <img
          className="temp__img"
          src={`https://openweathermap.org/img/wn/${dayImg}@2x.png`}
          alt=""
        />
        <div className="temp__location">
          <h1>
            <span>
              <IoLocationOutline className="location__icon" />{" "}
            </span>
            {prop.temp.city.name}
          </h1>
          <span className="temp__span">{`${
            prop.unit
              ? Math.round(prop.temp.list[0].main.temp - 273) + " °C"
              : Math.round(prop.temp.list[0].main.temp) + "°F"
          }`}</span>
        </div>
      </section>
    </>
  );
};

export default TempSection;
