import { Alert } from "react-bootstrap";

const Warning = (props) => {
  return <Alert variant="warning">{props.text}</Alert>;
};

export default Warning;
