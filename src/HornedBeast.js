import React, { useState } from 'react';

import { Card, Button, Modal } from 'react-bootstrap';
function HornedBeast(props) {
  // Initialize state for favorites
  const [favorites, setFavorites] = useState(0);
const [showModal, setShowModal] = useState(false);

  // Function to handle click and update favorites count
  const handleFavorite = () => {
    setFavorites(favorites + 1);
  };
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
     return (
        <>
            <Card style={{ width: '18rem', margin: '20px' }} onClick={handleOpenModal}>
                <Card.Img variant="top" src={props.imageUrl} alt={props.title} title={props.title} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="primary" onClick={handleFavorite}>
                        ❤️ Favorites: {favorites}
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={props.imageUrl} alt={props.title} title={props.title} style={{width: '100%'}} />
                    <p>{props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    ❤️ Favorites: {favorites}
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default HornedBeast;


