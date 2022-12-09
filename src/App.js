
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Icon from './components/Icon'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Work from './components/Work';
import { useState } from 'react';




function App() {
  return (
    <>
          <div style={{backgroundColor: "red"}}>
      This page has a yellow background!
     </div> 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">My work</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <HooveringEffect title="test"></HooveringEffect>
      <Row />
      <Col />
      <Work />
    
   
      <Icon />
   
    
    </>

  );
}



function HooveringEffect(props) {
  // Initialize the hoovering state to false
  const [isHoovering, setIsHoovering] = useState(false);

  // Handle the hoovering action by updating the hoovering state
  const handleHoovering = () => {
    setIsHoovering(!isHoovering);
  }

  // Render the hoovering effect if the hoovering state is true
  if (isHoovering) {
    return <div onMouseLeave={handleHoovering} onMouseEnter={handleHoovering}>{props.title}</div>

  }

  return (
    <div onMouseLeave={handleHoovering} onMouseEnter={handleHoovering}>
      Hover over me to see the hoovering effect
      console.log(hello)
    </div>
  );
}





export default App;
