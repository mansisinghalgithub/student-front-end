import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Header } from "../Pages/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchStudentById, updateStudent } from "../services/StdServices";
import { STUDENTS_LIST_ROUTE } from "../constants/AppRoute";

export function StudentEditForm() {
  const params = useParams();

  const navigate = useNavigate();

  const [student, setStudent] = useState({id:'' , name: '', course: '', rollno: '' });

  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getStudentById = async () => {
        try {
            const response = await fetchStudentById(params.id);
           
            if (response.status === 200) {
                setStudent(response.data);
              

            } else {
                setError("Failed to fetch student data.");
            }
        } catch (err) {
            setError("Error fetching student data.");
        } finally {
            setLoading(false);
        }
    };

  useEffect(() => {
    getStudentById();
    
  }, [params.id]);

  const handleFieldChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

 async function updateData()
  {
 try{
      const response = await updateStudent(params.id,student);
      if (response.status === 200) {
        navigate(STUDENTS_LIST_ROUTE);
      }

      else {
        setError("Failed to update student data.");
    }
} catch (err) {
    setError("Error updating student data.");
    console.error(err);  // Log the error for debugging
}
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
   updateData();
};

if (loading) {
return <div>Loading...</div>;
}

if (error) {
return <div>Error: {error}</div>;
}


  return (
    <Container>
      <Header title="Edit the student data" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={4}>

              <Form.Group className="mb-3" >
                <Form.Label>ID</Form.Label>
                <Form.Control type="number" placeholder="Enter Id" name="id" value={student.id} onChange={handleFieldChange} readOnly />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" value={student.name} onChange={handleFieldChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3" >
                <Form.Label>Course</Form.Label>
                <Form.Control type="text" placeholder="Enter Course" name="course" value={student.course} onChange={handleFieldChange} />
              </Form.Group>
            </Col>
            <Col lg={4}><Form.Group className="mb-3" >
              <Form.Label>Roll No</Form.Label>
              <Form.Control type="number" placeholder="Enter Roll" name="rollno" value={student.rollno} onChange={handleFieldChange} />
            </Form.Group></Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Button type="submit" variant="primary">Update Student</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  )
}