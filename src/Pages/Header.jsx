import { Container } from "react-bootstrap";
import { Alert } from "react-bootstrap";
export function Header(props){
    return(
        <Container>
            <Alert variant="success"><h5>{props.title}</h5></Alert>
            <p>{props.desc}</p>
        </Container>
    )
}