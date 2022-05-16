import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

  return (
    <div className='container'>
      <button
        className='butonBasket'
        onClick={() => {
          navigate('/');
        }}
      >
        Back to Home page
      </button>
      <button
        className='butonBasket '
        onClick={() => {
          navigate(`/basket/`);
        }}
      >
        Go cart!
      </button>
      {isInBasket && <h2>The product is in the cart!</h2>}
      <h5> {item[0].title}</h5>
      <p> {item[0].describe}</p>
      <p> Category: {item[0].category}</p>
      {!isInBasket && (
        <button
          className='butonBasket'
          onClick={() => {
            onAdd(item[0]);
          }}
        >
          Add to cart!
        </button>
      )}
      <img src={item[0].img} className='img-fluid' alt='product imaaage' />
    </div>
  );
};

export default Product;
