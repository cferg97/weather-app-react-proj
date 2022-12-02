import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link to="/weather">
      <Button variant="info" style={{ fontSize: "3rem" }}>
        See the weather!
      </Button>
    </Link>
  );
};

export default Home;
