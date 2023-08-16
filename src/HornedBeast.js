import React, { useState } from 'react';

function HornedBeast(props) {
  // Initialize state for favorites
  const [favorites, setFavorites] = useState(0);

  // Function to handle click and update favorites count
  const handleFavorite = () => {
    setFavorites(favorites + 1);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <img style={{width: '100px'}} src={props.imageUrl} alt={props.title} title={props.title} />
      <p>{props.description}</p>
      <p>
        <span role="img" aria-label="heart" onClick={handleFavorite}>
          💘
        </span>
        Favorites: {favorites}
      </p>
    </div>
  );
}

export default HornedBeast;


