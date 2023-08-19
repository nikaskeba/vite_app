import React, { useState } from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import { Container, Row, Col, Form } from 'react-bootstrap';

function Gallery() {
    const [selectedHorns, setSelectedHorns] = useState("all");

    return (
        <Container fluid>
            <Form>
                <Form.Group controlId="hornsSelect">
                    <Form.Label>Select number of horns</Form.Label>
                    <Form.Control 
                        as="select" 
                        value={selectedHorns} 
                        onChange={(e) => setSelectedHorns(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="1">1 Horn</option>
                        <option value="2">2 Horns</option>
                        {/* Add more options as needed */}
                    </Form.Control>
                </Form.Group>
            </Form>

            <Row>
                {data.filter(beast => selectedHorns === "all" || beast.horns === parseInt(selectedHorns))
                     .map(beast => (
                         <Col md={4} sm={6} xs={12} key={beast._id}>
                             <HornedBeast
                                 title={beast.title}
                                 imageUrl={beast.image_url}
                                 description={beast.description}
                             />
                         </Col>
                     ))}
            </Row>
        </Container>
    );
}

export default Gallery;

