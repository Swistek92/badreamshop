import React from 'react';
import { faker } from '@faker-js/faker';
const Card = (props: any) => {
  return (
    <div className='card'>
      <img className='card-img-top' src={faker.image.food()} />
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.description}</p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
