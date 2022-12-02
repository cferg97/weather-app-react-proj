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
        <h1>{props.weather.name}, {props.weather.sys.country}</h1>
        <h3>As of {date.toLocaleDateString()} at {date.toLocaleTimeString()}</h3>
        <hr />
        <h3>Currently {props.weather.main.temp}°C, feels like {props.weather.main.feels_like}°C <br/></h3>
        
        
        Expect highs of {props.weather.main.temp_max}°C and lows of {props.weather.main.temp_min}°C
        <hr />
        
      {/* <Card>
        <ListGroup variant="flush">
            <ListGroup.Item>
                As of {date.toLocaleDateString()} at {date.toLocaleTimeString()}
            </ListGroup.Item>
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
            Current condition is: {props.weather.weather[0].description}
          </ListGroup.Item>
          <ListGroup.Item>
            Humidity: {props.weather.main.humidity}%
          </ListGroup.Item>
        </ListGroup>
      </Card> */}
    </Container>
  );
};

export default Display;
