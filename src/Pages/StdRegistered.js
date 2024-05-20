import { useState } from "react";

import { Col, Row, Container, Form, Button } from "react-bootstrap";

import { StdService } from "../services/StdServices";



export function StudentReg() {
  const [fromData, setFormData] = useState({ id: 0, name: "", subject: "", rollno: 0 });

  // const[students,setStudent]=useState([]);

  const handleField = (e) => {
    setFormData({ ...fromData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    StdService(fromData)
      .then((response) => {
        alert(response.data.message)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(fromData)

  }

  const getStudent = async()=>{
    const response = await fetchData();
    console.log(response.data);
    setStudent(response.data)

  }

  const delStudent = async () => {

  }

  return (
    <>

      <Container>

        <Container>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={4}>

                <Form.Group className="mb-3" >
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="number" placeholder="Enter Id" name="id" onChange={handleField} />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3" >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleField} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Form.Group className="mb-3" >
                  <Form.Label>Course</Form.Label>
                  <Form.Control type="text" placeholder="Enter Course" name="subject" onChange={handleField} />
                </Form.Group>
              </Col>
              <Col lg={4}><Form.Group className="mb-3" >
                <Form.Label>Roll No</Form.Label>
                <Form.Control type="number" placeholder="Enter Rollno" name="rollno" onChange={handleField} />
              </Form.Group></Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Button type="submit" variant="primary">Register Student</Button>
              </Col>
            </Row>
          </Form>
        </Container>

         <Button type="button" onClick={getStudent}  variant="primary">Fetch</Button>
         {/* <Button type="button" onClick={delStudent}  variant="primary">Fetch</Button>  */}


      </Container>
    </>
  );
}