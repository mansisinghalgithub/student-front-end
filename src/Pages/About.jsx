import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card1 } from "../Component/Card";

export function About() {
    return(
        <>
        <Container>            
            <h1>About Us</h1>
        </Container>

        <Container>
        <Row>
        <Col><Card1 src="assets/img/img4.jpeg" title="Mansi Aggarwal" desc="mansisinghal63@gmail.com" d1="+91 7015545877"/></Col>
        <Col><Card1 src="assets/img/img3.jpeg" title="Akash Kalpande" desc="akashkalpande2020@gmail.com" d1="+91 7620127464"/></Col>
        <Col><Card1 src="assets/img/img2.jpeg" title="Shubham Charthad" desc="shubhamcharthad5050@gmail.com" d1="+91 7249044878"/></Col>
        </Row>
        </Container>

        
        </>  
    )
    
}

