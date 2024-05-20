import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { adminLogin } from '../services/adminLogin';

function Login() {
  
  const[loginData,setLogData] = useState({username:'',password:''})

  const [loginError,setLoginError]=useState('');
  const handleFieldChange = (e) =>{
      setLogData({...loginData,[e.target.value]:e.target.value})
  }

  const handleSubmit = async(e)=>{
      e.preventDefault();
     const response = await adminLogin(loginData)
     try {
      if(response.status ==200)
      {
       console.log("Logged in")
       //storeToken(response.data.token);
      }
      
     } catch (error) {
     if(response.status == 400){
        console.log(e)
       }
     }
    
     
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input class="form-control"  onChange={handleFieldChange} id="exampleInputEmail1" aria-describedby="emailHelp" o />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password"  onChange={handleFieldChange} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check" align="center">
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
 
  </form>
    </div>
    // <div className="d-flex justify-content-center align-items-center min-vh-100">
    
  );
}

export default Login;

//className='btn btn-primary text-dark'