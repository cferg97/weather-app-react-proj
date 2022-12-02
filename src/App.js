import { Row, Col, Container } from "react-bootstrap";
import Display from "./components/Display";
import MainWeather from "./components/MainWeather";

function App() {
  return (
    <div className="App">
      <div className="center">
        <Row className="d-flex flex-column justify-items-center text-center">
          <Col md={12}>
              <MainWeather />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
