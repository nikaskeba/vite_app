import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

function HornedBeast(props) {
  // Initialize state for favorites
  const [favorites, setFavorites] = useState(0);

  // Function to handle click and update favorites count
  const handleFavorite = () => {
    setFavorites(favorites + 1);
  };

  return (
    
    <Container>
    <Row>
      <Card.Title>{props.title}</Card.Title>
<Col>
      <img style={{width: '100px'}} src={props.imageUrl} alt={props.title} title={props.title} />
      <p>{props.description}</p>
      <p>
        <span role="img" aria-label="heart" onClick={handleFavorite}>
          💘
        </span>
        Favorites: {favorites}
      </p>
      </Col>
      </Row>
      </Container>
   
  );
}

export default HornedBeast;


