import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
    <Link to="/weather">
      <Button variant="info" style={{ fontSize: "3rem" }}>
        See the weather!
      </Button>
    </Link>
    </Container>
  );
};

export default Home;
