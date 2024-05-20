import Container from "react-bootstrap/Container";
import SignUp from "../Component/SignUp";

export function SignUpPage () {
    return(
        <>
   
        <Container align="center" height="100px" width="50px">
            <h1>SignUp</h1>
             
        </Container>
        <Container className="border border-dark p-4 bg-secondary w-50" style={{ height: '500px' }} >
            <SignUp/>
        </Container>
       
        </>       
        
    )

}
export default SignUpPage;