import Container from "react-bootstrap/Container";
import LoginForm from "../Component/LoginForm";

export function LoginPage () {



    return(
        <>
        <Container align="center" height="25px" width="25px">
            <h1>Login</h1>
             
        </Container>
        <Container className="border border-dark p-4 bg-secondary" style={{ width:'400px', height: '250px' }} >
           <LoginForm/>

        </Container>
    
        </>       
        
    )




    
}
export default LoginPage;