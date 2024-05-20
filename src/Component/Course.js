import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Course(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>
            {props.title}
            </Card.Title>
        <Card.Text>
            {props.desc}
        </Card.Text>
        <Card.Text>
            {props.d1}
        </Card.Text>

        <Button className='btn btn-secondary' ><Link to="/StudentRegistration" style={{ color: 'inherit', textDecoration: 'none' }}>Course Enroll</Link></Button>

        {/* <Button variant="primary" ><Link to="/StdList">Course Enroll</Link></Button> */}
      </Card.Body>

    </Card>
  );
}

export default Course;