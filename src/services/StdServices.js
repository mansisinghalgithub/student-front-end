import axios from 'axios';
import { GET_STUDENT_API_ROUTE, REMOVE_STUDENT_API_ROUTE, SAVE_STUDENT_API_ROUTE } from '../constants/ApiConstants';
import { STUDENT_EDIT_ROUTE } from '../constants/AppRoute';

export function saveStudent(studentData){
    return axios.post(SAVE_STUDENT_API_ROUTE,studentData)
}

export function fetchData(){
    return axios.get(GET_STUDENT_API_ROUTE)
}

export function removeStudent(studentId){
    return axios.delete(`${REMOVE_STUDENT_API_ROUTE}/${studentId}`);
}

export function fetchStudentById(studentId){
    return axios.get(`${GET_STUDENT_API_ROUTE}/${studentId}`);
}

export function updateStudent(studentId, studentData){
    return axios.put(`http://127.0.0.1:6800/students/${studentId}`,studentData);
}