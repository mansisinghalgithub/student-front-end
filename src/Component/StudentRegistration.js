import { Button, Col, Container, Form, Row, Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";
import { saveStudent } from "../services/StdServices";
import { Link } from "react-router-dom";

export function StudentRegistration() {

    const [formData,setFormData] = useState({id:'', name:'', course:'', rollno:''});

    const [showToast, setShowToast ] = useState(false);
    const handleFieldChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleCloseToast = () =>{ setShowToast(false)};

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        saveStudent(formData)
        .then((response)=>{
            setShowToast(true);
            alert(response.data.message);
        })
        .catch((error)=>
        {
            console.log(error);
        });
    }
    return (
        <Container>
           {/* <Header title="Register a student now" desc="This is form to register the student" /> */}
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter Id" name="id" onChange={handleFieldChange}/>
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                        <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleFieldChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                        <Form.Group className="mb-3">
                                <Form.Label>Course</Form.Label>
                                <Form.Control type="text" placeholder="Enter Course" name="course" onChange={handleFieldChange}/>
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                        <Form.Group className="mb-3">
                                <Form.Label>Roll no</Form.Label>
                                <Form.Control type="number" name="rollno" onChange={handleFieldChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Button type="submit" variant="secondary" style={{ color: 'white', textDecoration: 'none' }} >Register Student</Button><br/><br/>
                            <p><Button type="submit" variant="secondary" style={{ color: 'white', textDecoration: 'none' }}><Link to="/students-list" style={{ color: 'inherit', textDecoration: 'none' }}>Fetch Data</Link></Button></p>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <ToastContainer position="top-end">
            <Toast bg="success"  onClose={handleCloseToast} show={showToast} delay={3000}autohide>
                <Toast.Header>
                    <strong className="me-auto">Confirmation</strong>
                </Toast.Header>
                <Toast.Body className="text-white">Student registered</Toast.Body>
            </Toast>
            </ToastContainer>
            
        </Container>
    );
}




// import {Alert, Container} from "react-bootstrap";

// export function StudentRegistrations(props){
//     return(
//         <Container className="mt-4">
//             <Alert variant ="success"><h5>{props.title}</h5></Alert>
//             <p>{props.description}</p>
//         </Container>
//     )
// }

// import { Container, Row } from "react-bootstrap";
// import { StudentRegistrations } from "../Pages/StudentRegistrations";

// export function StudentRegistration(){
//     return(
//         <Container>
//             <StudentRegistrations title="Register a student now" description="This is form">
//                 <Container>
//                     <Form>
//                     <Row>
//                         <Col lg={4}></Col>
//                         <Col lg={4}></Col>
//                     </Row>

//                     <Row>
//                         <Col lg={4}></Col>
//                         <Col lg={4}></Col>
//                     </Row>

//                     <Row>
//                         <Col lg={4}></Col>
//                         <Col lg={4}></Col>
//                     </Row>
//                     </Form>
//                 </Container>
//             </StudentRegistrations>
//         </Container>
//     )
// }