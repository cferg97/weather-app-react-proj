import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Display from "./Display";

const MainWeather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1dab01feaf403d46a74c5c928e83c26c`;

  const searchLocation = async (event) => {
    try {
      let response = await fetch(baseURL);
      if (response.ok) {
        setData(await response.json());
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } else {
        console.log("Couldn't fetch weather data");
        setTimeout(() => {
          setIsLoading(false);
          setIsError(true);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setIsLoading(false);
        setIsError(true);
      });
    }
  };

  return (
    <Container fluid>
      <h1>What's the weather in...</h1>
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyUp={searchLocation}
            placeholder="Search for a location..."
            type="text"
            className="mb-4"
          />
        </Col>
        {isError && <Display weather={data} />}
      </Row>
    </Container>
  );
};
export default MainWeather;
