import React from 'react';
import data from './data.json'; // adjust the path if the JSON is in a different location
import HornedBeast from './HornedBeast';
import beast1Image from './assets/bowling1.jpeg';
import beast2Image from './assets/hornedtennis.jpeg';
import { Card, Button } from 'react-bootstrap';
function Gallery() {
  return (
  <Card>
  <Card.Body>
      <div>
      {data.map(beast => (
        <HornedBeast
          key={beast._id}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
        />
      ))}
    </div>
 </Card.Body>
  </Card>
  );
}

export default Gallery;

