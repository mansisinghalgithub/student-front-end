import Container from "react-bootstrap/Container";
import Course  from "../Component/Course";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Courses() {
    return (
        <> <Container>
            <h1>Courses</h1>
            
        </Container> 
        
        <Container>
            <Row>
                <Col>
                <Course src="assets/img/img7.jpeg" title="PG-DAC Post Graduate Diploma in Advance Computing" desc="6 month" d1="1,00,000 ₹"  />
                </Col>

                <Col>
                <Course src="assets/img/img8.jpeg" title="PG-DBDA Post Graduate Diploma in Big Data Analytics" desc="6 month" d1="1,00,000 ₹" /></Col>
                
                <Col><Course src="assets/img/img9.jpeg" title="PG-DAI Post Graduate Diploma in Artificial Intelligence" desc="6 month" d1="1,00,000 ₹" /></Col>
                
                <Col><Course src="assets/img/img10.jpeg" title="PG-DCSF Post Graduate Diploma in Cyber Security & Forensics" desc="6 month" d1="1,00,000 ₹" /></Col>
            </Row>

        </Container>
        
        </>

    )
}