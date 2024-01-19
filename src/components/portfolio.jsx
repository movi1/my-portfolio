import React from "react";
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import exampleImage from './example.png';  // Import your image

const Portfolio = () => {
  const projectData = [
    { title: 'travel-bucket-list', image: 'https://via.placeholder.com/150', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'product-landing-page', image: 'https://via.placeholder.com/150', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'tribute-page', image: 'https://via.placeholder.com/150', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'Harry-Potter-Challenge', image: 'https://via.placeholder.com/150', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'My-character-game', image: 'https://via.placeholder.com/150', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'london-underground-app', image: 'https://via.placeholder.com/150', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
  ];

  return (
    <div>
    <h1>Portfolio</h1>
 
    <Container>
      <Row>
        {projectData.map(({ title, image, description }, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card style={{ width: '18rem' }}>
              <Image className="card" src={image} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default Portfolio;
