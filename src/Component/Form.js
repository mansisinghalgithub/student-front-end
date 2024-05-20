import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Form1() {
    var arr = ['MH','UP','HR','DL','UK','J&K','PJ','GJ','MP','AP','KERALA','Bihar','ASSAM','CJH','GOA'];
  return (
   
    <Form>
        
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" required />
        </Form.Group>

        </Row>

        <Row>
        <Form.Group as={Col} controlId="formGridDOB">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" required/>
        </Form.Group> 

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        
      </Row>

      <Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" required/>
      </Form.Group>
      </Row>

      <Row>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" required />
      </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Select State</option>
            {
                arr.map((st)=>{
                    return (<option>{st}</option> )
                })
            }
           
            {/* <option>Maharastra</option>
            <option>Haryana</option> */}
          </Form.Select>
        </Form.Group>
        </Row>

        <Row>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control required/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="All the above conditions are true and valid" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
  );
}

export default Form1;