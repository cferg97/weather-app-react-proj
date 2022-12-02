import { Navbar, Nav, Container } from "react-bootstrap";

const MyFooter = () => {
    return ( 
        <Container fluid>
            <nav>
                <Navbar bg="light" fixed="bottom">
                    <Nav.Link href="https://github.com/cferg97">By Catriona Ferguson</Nav.Link>
                </Navbar>
            </nav>
        </Container>
     );
}
 
export default MyFooter;