import Container from "react-bootstrap/Container";
import CarouselHead from "../Component/CarouselHead";
import Form1 from "../Component/Form";

export function Contact () {
    return(
        <>
    
        <Container align="center">
            <h1>Contact Us</h1>
        </Container>
        <Container className="border border-dark p-4 bg-secondary w-50" style={{ height: '600px' }} >
            <Form1></Form1>
        </Container>
    
        </>  
  
    )
}
