import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import { adminLogin, storeToken } from "../services/adminLogin";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
function LoginForm() {
  const [logError, setError] = useState("");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
   const navigate =  useNavigate();
  const handleFieldChange = (e) => {
   
    setLoginData({ ...loginData, [e.target.name]:e.target.value });
  };

  async function fetchLogin()
  {
    try {
      const response = await adminLogin(loginData);
      console.log(response);
      if(response.status === 200)
        {
          storeToken(response.data.token)
          navigate("/home");
        }
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.status === 400) {
        console.log(loginData);
        setError(error.response.data.Message);
        console.log(error.response.data.Message);
     
      }
 }
  }
  const handleSubmit = (e) => {
    console.log(loginData);
    e.preventDefault();
    fetchLogin();
   
  };
  return (
    <div  className="container-fluid">
      <Form onSubmit={handleSubmit}>
        <h2>
          <span className="bi bi-person-fill"></span> User Login
        </h2>
        <Form.Group className="mb-2">
          <Form.Label>Username</Form.Label>
          <Form.Control
          type="text"
            name="username"
                 onChange={handleFieldChange}
            placeholder="Enter username"
          />
</Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            
            onChange={handleFieldChange}
            placeholder="Enter password"
          />
        </Form.Group>
        <Button className="w-100" type="submit" variant="primary">
          Submit
        </Button>
      </Form>
      {logError && logError.length > 0 && (
        <Row className="mt-3">
          <Col lg={{ span: 4, offset: 4 }}>
            <Alert variant="danger">{logError}</Alert>
          </Col>
        </Row>
      )}
    </div>
  );
}
export default LoginForm;