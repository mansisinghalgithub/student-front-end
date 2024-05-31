import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { removeToken} from '../services/adminLogin';

function Navigation() {

  const navigate =   useNavigate();
  const handleLogout=()=>{
    removeToken()
    navigate("/")
  }

  return (
    <div className={styles.Link}>
    <Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">CAMU</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
          <Nav.Link><Link to="/home">Home</Link></Nav.Link>
          <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
          <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
          <Nav.Link><Link to="/feedback">Feedback</Link></Nav.Link>
          <Nav.Link><Link to="/course">Courses</Link></Nav.Link>
            {/* <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/about">About Us</Nav.Link>
            
                            <LinkContainer to={'/'}>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

            <Nav.Link to="/contact">Contact Us</Nav.Link>
            <Nav.Link to="/feedback">Feedback</Nav.Link> */}
            
          </Nav>
          <Nav>
            <Nav.Link><Button className="btn btn-secondary" style={{ color: 'white', textDecoration: 'none' }}><Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>SignUp</Link></Button></Nav.Link>
            <Nav.Link><Button className="btn btn-secondary" type="submit" onClick={handleLogout} varient="secondary">Logout</Button></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navigation;