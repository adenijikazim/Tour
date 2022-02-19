import React, { useState } from 'react';

const Tour = ({id,image,info,price}) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
        <h4>{name}</h4>
        <div className="tour-price">${price}</div>
        </div>

      </footer>

    </article>
  );
};

export default Tour;
