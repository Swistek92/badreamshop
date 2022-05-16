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
  const { products, onAdd, cartItems } = props;

  let isInBasket = false;
  const { id } = useParams();
  const navigate = useNavigate();

  const item: products[] = products.filter((obj: any) => obj.id === Number(id));

  cartItems.forEach((e: any) => {
    if (e.id === Number(id)) {
      isInBasket = true;
    }
  });
  console.log(isInBasket);

  return (
    <div className='container'>
      <button
        className='butonBasket'
        onClick={() => {
          navigate('/');
        }}
      >
        Wróc do strony głównej
      </button>
      <button
        className='butonBasket '
        onClick={() => {
          navigate(`/basket/`);
        }}
      >
        Idz do koszyka
      </button>
      {isInBasket && <h2>Produkt jest w koszyku!</h2>}
      <h5> {item[0].title}</h5>
      <p> {item[0].describe}</p>
      <p> Kategoria {item[0].category}</p>
      {!isInBasket && (
        <button
          className='butonBasket'
          onClick={() => {
            onAdd(item[0]);
          }}
        >
          Dodaj do koszyka
        </button>
      )}
      <img src={item[0].img} className='img-fluid' alt='product imaaage' />
    </div>
  );
};

export default Product;
