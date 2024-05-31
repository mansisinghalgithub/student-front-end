import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';

function Form1() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    email: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const arr = ['MH', 'UP', 'HR', 'DL', 'UK', 'J&K', 'PJ', 'GJ', 'MP', 'AP', 'KERALA', 'Bihar', 'ASSAM', 'CJH', 'GOA'];

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const sendEmail = (event) => {
    event.preventDefault();
    console.log('Attempting to send email:', formData);

    if (window.Email) {
      window.Email.send({

        Host: 'smtp.gmail.com',
        Port: 587, 
        SecureToken: 'true', 
        Username: 'cdacmumbai25@gmail.com',
        Password: 'mansi251997',
        To: 'mansisinghal63@gmail.com',
        From: formData.email,
        Subject: 'Contact Form Enquiry',
        Body: `
          "First Name:" ${formData.firstname}
          "Last Name:" ${formData.lastname}
          "DOB:" ${formData.dob}
          "Email:" ${formData.email}
          "Address:" ${formData.address}
          "Address 2:" ${formData.address2}
          "City:" ${formData.city}
          "State:" ${formData.state}
          "Zip:" ${formData.zip}
        `
      }).then(
        message => {
          console.log('Email sent successfully:', message);
          alert('Message sent successfully');
        }
      ).catch(
        error => {
          console.error('Failed to send message:', error);
          alert('Failed to send message: ' + error.message);
        }
      );
    } else {
      alert('SMTP.js is not loaded yet. Please try again');
    }
  };

  return (
    <Form onSubmit={sendEmail}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" required value={formData.firstname} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" required value={formData.lastname} onChange={handleChange} />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="dob">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" required value={formData.dob} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required value={formData.email} onChange={handleChange} />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" required value={formData.address} onChange={handleChange} />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3" controlId="address2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" required value={formData.address2} onChange={handleChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder='Enter city' required value={formData.city} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." required value={formData.state} onChange={handleChange}>
            <option>Select State</option>
            {arr.map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="zip">
          <Form.Label>Zip</Form.Label>
          <Form.Control placeholder='Enter Zip' required value={formData.zip} onChange={handleChange} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="All the above conditions are true and valid" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Form1;

// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import { useState, useEffect } from 'react';

// function Form1() {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     dob: '',
//     email: '',
//     address: '',
//     address2: '',
//     city: '',
//     state: '',
//     zip: ''
//   });

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://smtpjs.com/v3/smtp.js';
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const arr = ['MH', 'UP', 'HR', 'DL', 'UK', 'J&K', 'PJ', 'GJ', 'MP', 'AP', 'KERALA', 'Bihar', 'ASSAM', 'CJH', 'GOA'];

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const sendEmail = (event) => {
//     console.log('Attempting to send email:', formData);
//     event.preventDefault();

//     if (window.Email) {
//       window.Email.send({
//         Host: 'smtp.gmail.com',
//         Username: 'cdacmumbai25@gmail.com',
//         Password: 'mansi251997',
//         To: 'mansisinghal63@gmail.com',
//         From: formData.email,
//         Subject: 'Contact Form Enquiry',
//         Body: `
//           "First Name:" ${formData.firstname}
//           "Last Name:" ${formData.lastname}
//           "DOB:" ${formData.dob}
//           "Email:" ${formData.email}
//           "Address:" ${formData.address}
//           "Address 2:" ${formData.address2}
//           "City:" ${formData.city}
//           "State:" ${formData.state}
//           "Zip:" ${formData.zip}
//         `
//       }).then(
//         message => alert('Message sent successfully')
//       ).catch(
//         error => alert('Failed to send message: ' + error.message)
//       );
//     } else {
//       alert('SMTP.js is not loaded yet. Please try again');
//     }
//   };

//   return (
//     <Form onSubmit={sendEmail}>
//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="firstname">
//           <Form.Label>First Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter First Name" required value={formData.firstname} onChange={handleChange} />
//         </Form.Group>

//         <Form.Group as={Col} controlId="lastname">
//           <Form.Label>Last Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter Last Name" required value={formData.lastname} onChange={handleChange} />
//         </Form.Group>
//       </Row>

//       <Row>
//         <Form.Group as={Col} controlId="dob">
//           <Form.Label>DOB</Form.Label>
//           <Form.Control type="date" required value={formData.dob} onChange={handleChange} />
//         </Form.Group>

//         <Form.Group as={Col} controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" required value={formData.email} onChange={handleChange} />
//         </Form.Group>
//       </Row>

//       <Row>
//         <Form.Group className="mb-3" controlId="address">
//           <Form.Label>Address</Form.Label>
//           <Form.Control placeholder="1234 Main St" required value={formData.address} onChange={handleChange} />
//         </Form.Group>
//       </Row>

//       <Row>
//         <Form.Group className="mb-3" controlId="address2">
//           <Form.Label>Address 2</Form.Label>
//           <Form.Control placeholder="Apartment, studio, or floor" required value={formData.address2} onChange={handleChange} />
//         </Form.Group>
//       </Row>

//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="city">
//           <Form.Label>City</Form.Label>
//           <Form.Control placeholder='Enter city' required value={formData.city} onChange={handleChange} />
//         </Form.Group>

//         <Form.Group as={Col} controlId="state">
//           <Form.Label>State</Form.Label>
//           <Form.Select defaultValue="Choose..." required value={formData.state} onChange={handleChange}>
//             <option>Select State</option>
//             {arr.map((st) => (
//               <option key={st} value={st}>{st}</option>
//             ))}
//           </Form.Select>
//         </Form.Group>
//       </Row>

//       <Row>
//         <Form.Group as={Col} controlId="zip">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control placeholder='Enter Zip' required value={formData.zip} onChange={handleChange} />
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" id="formGridCheckbox">
//         <Form.Check type="checkbox" label="All the above conditions are true and valid" required />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Form1;



