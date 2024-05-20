import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Card1(props) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" width ="350px" height="381px" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.desc}
          </Card.Text>
          <Card.Text>
           {props.d1}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
}