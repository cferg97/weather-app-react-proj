import { Row, Col, Container, Card, ListGroup } from "react-bootstrap";
import { fromUnixTime } from "date-fns";

const Display = (props) => {
  const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

  let date = fromUnixTime(props.weather.dt);
  console.log(date);
  let icon = props.weather.weather[0].icon;
  return (
    <Container className="text-center">
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
          <img src={iconUrlFromCode(icon)} />
            The current temperature is {props.weather.main.temp}°C
            <br />
            (Feels like... {props.weather.main.feels_like}°C)
            
          </ListGroup.Item>
          <ListGroup.Item>
            Min Temp: {props.weather.main.temp_min}°C | Max Temp:{" "}
            {props.weather.main.temp_max}°C
          </ListGroup.Item>
          <ListGroup.Item>
            Currently, there is {props.weather.weather[0].main}
          </ListGroup.Item>
          <ListGroup.Item>
            Humidity: {props.weather.main.humidity}%
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default Display;
