
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { SocialIcon } from 'react-social-icons';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Work from './components/Work';


function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">My work</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <div>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
          </div>
        </Container>
      </Navbar>



      <Row />
      <Col />
      <Work />
    </>
  );
}


export default App;
