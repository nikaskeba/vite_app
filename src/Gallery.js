import React from 'react';
import HornedBeast from './HornedBeast';
import beast1Image from './assets/bowling1.jpeg';
import beast2Image from './assets/hornedtennis.jpeg';
function Gallery() {
  return (
    <div>
      <HornedBeast
        title="The Horned Beast Bowler"
        imageUrl={beast1Image}
        description="Horned Beast that loves to bowl."
      />
      <HornedBeast
        title="Beast Tennis Player"
        imageUrl={beast2Image}
        description="Horned Beast that plays tennis."
      />
     
    </div>
  );
}

export default Gallery;