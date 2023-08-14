import React from 'react';

function HornedBeast(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img style={{width: '200px'}} src={props.imageUrl} alt={props.title} title={props.title} />
      <p>{props.description}</p>
    </div>
  );
}

export default HornedBeast;
