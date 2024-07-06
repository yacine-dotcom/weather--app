/* eslint-disable react/prop-types */
const WeatherForcast = ({ temp, srcImg, description, unit }) => {
  const nightImg = srcImg;
  const dayImg = nightImg.replace("n", "d");

  return (
    <>
      <div className="cards">
        <div className="daily__temp">
          <div>{description}</div>
          <img
            className="daily__temp__img"
            src={`https://openweathermap.org/img/wn/${dayImg}.png`}
            alt=""
          />
          <div>
            {unit ? parseInt(temp - 273) + "°C" : parseInt(temp) + "°F"}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherForcast;
