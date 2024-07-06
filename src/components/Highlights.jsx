const Highlights = (prop) => {
  return (
    <>
      <section className="highlights">
        <div className="wind">
          <h2>Wind</h2>
          <h4>{prop.highlights[0].wind.speed} Mah</h4>
        </div>
        <div className="humidity">
          <h2>Humidity</h2>
          <h4>{prop.highlights[0].main.humidity}%</h4>
          <input
            className="humidity__rang"
            type="range"
            style={{ width: "100%" }}
            value={prop.highlights[0].main.humidity}
            id=""
          />
        </div>
        <div className="visibility">
          <h2>visibility</h2>
          <h4>{prop.highlights[0].visibility}m</h4>
        </div>
        <div className="pressure">
          <h2>Air pressure</h2>
          <h4>{prop.highlights[0].main.pressure}mb</h4>
        </div>
      </section>
    </>
  );
};

export default Highlights;
