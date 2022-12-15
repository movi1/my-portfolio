import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';

const Repo = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        //function to get data
        async function fetchData() {
            const response = await fetch('https://api.github.com/users/movi1/repos?sort=updated&direction=desc');
            const data = await response.json();
            //   console.log(data[1])
            setData(data);
        }

        fetchData();
    }, []);

    return (
        <>
            <Container>
                <Row>

                    {data.map(item => {

                        if (item.topics.includes('portfolio-project')) {
                            return (

                                <Col xs={12} md={6} lg={4}>
                                    <Card style={{ width: '18rem' }}>
                                        <Image className="card" src="https://via.placeholder.com/150" />
    
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content. {item.id}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }


                    })}

                </Row>

            </Container>





            <h1>Hello this is a test component</h1>
        </>

    );


};

export default Repo;