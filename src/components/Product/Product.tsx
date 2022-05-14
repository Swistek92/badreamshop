import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../Data/Data';

const Product = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const item = data.filter((obj) => obj.id === Number(id));

  return (
    <div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        go back !
      </button>
      <h5> produkt o id {id}</h5>
      <h5> produkt title {item[0].title}</h5>
      <p> produkt title {item[0].describe}</p>
      <p> produkt category {item[0].category}</p>
      <img src={item[0].img} alt='product imaaage' />
    </div>
  );
};

export default Product;
