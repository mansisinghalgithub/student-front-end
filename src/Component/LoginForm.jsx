import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import styles from "./LoginForm.css";
import { useState } from "react";
import { adminLogin, storeToken } from "../services/adminLogin";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "", general: "" });

  const navigate = useNavigate();

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error message for the field being edited
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    let valid = true;
    let newErrors = { username: "", password: "", general: "" };

    if (!loginData.username) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!loginData.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await adminLogin(loginData);

      if (response.status === 200) {
        storeToken(response.data.token);
        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors({ ...errors, general: error.response.data.Message });
      } else {
        setErrors({ ...errors, general: "An unexpected error occurred. Please try again later." });
      }
    }
  };

  return (
    <div id={"form_container"}>
      <Form onSubmit={handleSubmit} id={"form1"}>
        <h2>
          <span className="bi bi-person-fill"></span> User Login
        </h2>
        <Form.Group className="mb-2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            value={loginData.username}
            onChange={handleFieldChange}
            placeholder="Enter username"
          />
          {errors.username && <span style={{ color: 'red' }}  >{errors.username}</span>}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleFieldChange}
            placeholder="Enter password"
          />
          {errors.password && <span style={{ color: 'red' }} >{errors.password}</span>}
        </Form.Group>
        <Button className="w-100" type="submit" variant="primary">
          Submit
        </Button>
      </Form>

      {errors.general && (
        <Row className="mt-3">
          <Col lg={{ span: 4, offset: 4 }}>
            <Alert variant="danger">{errors.general}</Alert>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default LoginForm;


// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useState } from "react";
// import { adminLogin, storeToken } from "../services/adminLogin";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Alert } from "react-bootstrap";
// import {useNavigate} from "react-router-dom"

// function LoginForm() {
//   const [logError, setError] = useState("");
//   const [loginData, setLoginData] = useState({ username: "", password: "" });

//    const navigate =  useNavigate();

//   const handleFieldChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await adminLogin(loginData);
//       console.log(response);

//       if(response.status === 200)
//         {
//           storeToken(response.data.token)
//           navigate("/home");
//         }

//     } catch (error) {

//       console.log(error.response);
//       if (error.response && error.response.status === 400) {

//         console.log(loginData);
//         setError(error.response.data.Message);
//         console.log(error.response.data.Message);
     
//       }
//     }
//   };

//   return (
//     <div id={'form_container'} className="container-fluid">
//       <Form onSubmit={handleSubmit} id={'form1'}>
//         <h2>
//           <span className="bi bi-person-fill"></span> User Login
//         </h2>
//         <Form.Group className="mb-2">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             name="username"
//             value={loginData.username}
//             onChange={handleFieldChange}
//             placeholder="Enter username"
//           />
//         </Form.Group>
//         <Form.Group className="mb-2">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="password"
//             value={loginData.password}
//             onChange={handleFieldChange}
//             placeholder="Enter password"
//           />
//         </Form.Group>
//         <Button className="w-100" type="submit" variant="primary">
//           Submit
//         </Button>
//       </Form>

//       {logError && logError.length > 0 && (
//         <Row className="mt-3">
//           <Col lg={{ span: 4, offset: 4 }}>
//             <Alert variant="danger">{logError}</Alert>
//           </Col>
//         </Row>
//       )}
//     </div>
//   );
// }

// export default LoginForm;

