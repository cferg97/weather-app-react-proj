import { Row, Col, Container } from "react-bootstrap";
import MainWeather from "./components/MainWeather";
import Home from "./components/Home";
import MyFooter from "./components/myFooter";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="center flex-column">
      <h1 className="text-center mb-4">What's the weather?</h1>
        <Row className="d-flex flex-column justify-items-center text-center">
          <Col md={12}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<MainWeather />} />
              </Routes>
            </BrowserRouter>
            <MyFooter />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
