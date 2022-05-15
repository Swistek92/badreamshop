import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../Data/Data';

interface products {
  id: number;
  price: number;
  title: string;
  describe: string;
  img: string;
  category: string;
}

const Product = (props: any) => {
  const { products } = data;
  const { onAdd } = props;

  let { id } = useParams();
  let navigate = useNavigate();

  const item: products[] = products.filter((obj: any) => obj.id === Number(id));

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
      <button
        className='btn btn-primary btn-card'
        onClick={() => {
          onAdd(item[0]);
        }}
      >
        {' '}
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
