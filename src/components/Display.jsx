import { Container } from "react-bootstrap";
import { fromUnixTime } from "date-fns";

const Display = (props) => {
  const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

  let date = fromUnixTime(props.weather.dt);
  let sunUp = fromUnixTime(props.weather.sys.sunrise);
  let sunDown = fromUnixTime(props.weather.sys.sunset);
  console.log(date);
  let icon = props.weather.weather[0].icon;

  return (
    <Container className="text-center" id="p-bg">
      <h1>
        {props.weather.name}, {props.weather.sys.country}
      </h1>
      <h5>
        As of {date.toLocaleDateString()} at {date.toLocaleTimeString()}
      </h5>
      <hr />
      <h3>Currently {props.weather.main.temp}°C</h3>
      <h6>Feels like {props.weather.main.feels_like}°C</h6>
      <p>
        Expect highs of {props.weather.main.temp_max}°C and lows of{" "}
        {props.weather.main.temp_min}°C <br />
        <img
          src={iconUrlFromCode(icon)}
          alt="weather icon"
          className="weather-icon"
        />{" "}
        <br />
      </p>
      <hr />
      <p>
        Condition: {props.weather.weather[0].description} <br />
        Humidity: {props.weather.main.humidity}%
      </p>
      <p>
        <i className="fa-solid fa-wind"></i> {props.weather.wind.speed} m/s
      </p>
      <hr />
      <i className="fa-solid fa-moon"></i> {sunDown.toLocaleTimeString()} |{" "}
      <i className="fa-regular fa-sun"></i> {sunUp.toLocaleTimeString()}
    </Container>
  );
};

export default Display;
