import { Alert, Button, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchData, removeStudent } from "../services/StdServices";
import { Header } from "./Header";
import Modal from 'react-bootstrap/Modal';
// import { StudentEditForm } from "./StudentEditForm";
import { Navigate, useNavigate } from "react-router-dom";
import { STUDENT_EDIT_ROUTE } from "../constants/AppRoute";


export function StdList() {
    const [students, setStudent] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [selectedStudentId, setSelectedStudentId] = useState(0);

    const navigate = useNavigate();

    const closeModal = () => {
        setShowModal(false);
    }

    const getStudent = async () => {
        const response = await fetchData();
        console.log(response.data);
        setStudent(response.data)

    }

    const handleYesClick = async () =>{
        const response = await removeStudent(selectedStudentId);
        console.log(response);
        if(response.status == 200){
            setShowModal(false);
            getStudent();
            alert("Data removed");
        }
       
    }   

    const updateStudent = async ()=>{
        const response = await updateStudent();
        console.log(response.data);
        updateStudent(students);
    }


    useEffect(()=>{
        getStudent();
    },[]);

    return (
        <>
            <Container>
                <Header title="List of Students" desc="Here you can view, delete,and edit the student" />
                {/* <Button type="button" onClick={getStudent} variant="primary">Fetch</Button> */}
                {/* <Button type="button" onClick={delStudent}  variant="primary">Fetch</Button> */}

                <Container className="mt-4">
                    {
                        students.length == 0 ?
                        <Alert variant="danger">No Student Exists</Alert>
                        :
                        <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Course</th>
                                <th>Roll no</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                students.map((s) => {
                                    return (
                                        <tr>
                                            <td>{s.id}</td>
                                            <td>{s.name}</td>
                                            <td>{s.course}</td>
                                            <td>{s.rollno}</td>
                                            <td>

                                                <Button variant="danger" style={{ marginRight: '10px' }} onClick={() => {
                                                    setShowModal(true);
                                                    setSelectedStudentId(s.id);
                                                }}>Delete</Button>
                                                <Button variant="primary" onClick ={()=>{
                                                  navigate(`/edit-student/${s.id}`)
                                                }}>Edit</Button>

                                            </td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </Table>
                    }
                    
                </Container>
                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to remove {selectedStudentId} ?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleYesClick}>
                            Yes
                        </Button>
                        <Button variant="danger" onClick={closeModal}>
                            No
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>


        </>



    )
}