import { Alert } from "react-bootstrap";

const AlertMessage = (props) => {
    return ( 
        <Alert variant="danger">
            <p><span className="font-weight-bold">{props.location}</span> is not a valid location. <br />
            Please enter a valid postcode, city or country.</p>
        </Alert>
     );
}
 
export default AlertMessage;