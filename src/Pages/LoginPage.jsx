import Container from "react-bootstrap/Container";
import LoginForm from "../Component/LoginForm";

export function LoginPage () {



    return(
        <>
        <Container align="center" height="25px" width="25px">
            <h1>Login</h1>
             
        </Container>
        <Container className="border border-dark p-4 h-50 bg-secondary" style={{ width:'500px', height: '350px' }} >
           <LoginForm/>

        </Container>
    
        </>       
        
    )




    
}
export default LoginPage;