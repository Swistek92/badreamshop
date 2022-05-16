/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Baseket.scss';
import { useNavigate } from 'react-router-dom';

const Basket = (props: any) => {
  const { cartItem, onAdd, onRemove } = props;

  const navigate = useNavigate();
  const filtered = cartItem.filter((obj: any) => obj.qty !== 0);

  const financial = (x: any) => {
    return Number(parseFloat(x).toFixed(2));
  };

  const itemsPrice = financial(
    filtered.reduce((a: any, c: any) => a + c.qty * c.price, 0)
  );
  const taxPrice = financial(itemsPrice * 0.14);
  const shippingPrice = itemsPrice > 200 ? 0 : 20;
  const totalPrice = financial(itemsPrice + taxPrice + shippingPrice);

  return (
    <div className='container'>
      <button
        className='butonBasket '
        onClick={() => {
          navigate(`/`);
        }}
      >
        Go back!
      </button>
      {filtered.length !== 0 && <h2>Twoje przedmioty</h2>}
      <div>
        {filtered.length === 0 && (
          <div>
            <h1>Cart is empty</h1>
          </div>
        )}
        {filtered.map((item: any) => (
          <div key={item.id}>
            <h3>
              <a
                onClick={() => {
                  navigate(`/product/${item.id}`);
                }}
              >
                {' '}
                {item.name}{' '}
              </a>
              <button onClick={() => onRemove(item)} className='btn btn-danger'>
                -
              </button>
              <button onClick={() => onAdd(item)} className='btn btn-primary'>
                +
              </button>
              PIECES {item.qty} x ${item.price}
            </h3>
          </div>
        ))}

        {filtered.length !== 0 && (
          <>
            <hr />
            <h5>Above $ 200 Free Shipping!</h5>

            <p>Price of the items: ${itemsPrice}</p>

            <p>Taxs $ {taxPrice}</p>

            <p>Shipping $ {shippingPrice}</p>

            <p>
              <strong>Total price ${totalPrice}</strong>
            </p>

            <div className='col-1 text-right'>
              <strong></strong>
            </div>

            <hr />
            <div className='row'>
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;
