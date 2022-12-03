import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Display from "./Display";
import AlertMessage from "./Error";
import Warning from "./Warning"

const MainWeather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [show, setToShow] = useState(false)
  const [typeError, setTypeError] = useState(false)

  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1dab01feaf403d46a74c5c928e83c26c`;

  const searchLocation = async () => {
    try {
      let response = await fetch(baseURL);
      if (response.ok) {
        setData(await response.json());
        setTimeout(() => {
          setIsLoading(false);
          setToShow(true)
        }, 500);
      } else {
        console.log("Couldn't fetch weather data");
        setTimeout(() => {
          setIsLoading(false);
          setIsError(true);
          setToShow(false)
        }, 2000);
        setTimeout(() => {
          setIsError(false)
        },5000)
      }
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setIsLoading(false);
        setIsError(true);
        setToShow(false)
      }, 2000);
      setTimeout(() => {
        setIsError(false)
      },5000)
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      searchLocation();
      setTypeError(false)
    }
    else{
      setTypeError(true)
      setTimeout(() => {
        setTypeError(false)
      }, 5000)
    }
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col className="text-center">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={(e) => handleEnter(e)}
            placeholder="Search for a location..."
            type="text"
            className="mb-4 text-center search-bar"
          />
        </Col>
        {isLoading && <Spinner />}
        {show && <Display weather={data}/>}
        {isError && <AlertMessage location={location} />}
        {typeError && <Warning text="press enter to search" />}

      </Row>
    </Container>
  );
};
export default MainWeather;
