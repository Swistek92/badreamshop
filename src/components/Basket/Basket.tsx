import React from 'react';
import './Baseket.scss';

const Basket = (props: any) => {
  const { cartItem, onAdd, onRemove } = props;

  const filtered = cartItem.filter((obj: any) => obj.qty !== 0);

  const financial = (x: any) => {
    return Number(parseFloat(x).toFixed(2));
  };

  const itemsPrice = financial(
    filtered.reduce((a: any, c: any) => a + c.qty * c.price, 0)
  );
  const taxPrice = financial(itemsPrice * 0.14);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = financial(itemsPrice + taxPrice + shippingPrice);

  return (
    <div className='container'>
      {filtered.length !== 0 && <h2>Cart Items</h2>}
      <div>
        {filtered.length === 0 && (
          <div>
            <h1>Cart is empty</h1>
          </div>
        )}
        {filtered.map((item: any) => (
          <div key={item.id} className='row'>
            <div className='col-2'> {item.name}</div>
            <h1 className='col-2'>
              <button onClick={() => onRemove(item)} className='btn btn-danger'>
                -
              </button>

              <button onClick={() => onAdd(item)} className='btn btn-primary'>
                +
              </button>
            </h1>

            <div className='col-2 text-right'>
              {item.qty} x ${item.price}
            </div>
          </div>
        ))}

        {filtered.length !== 0 && (
          <>
            <hr></hr>
            <div className='row'>
              <div className='col-2'>Items Price</div>
              <div className='col-1 text-right'>${itemsPrice}</div>
            </div>
            <div className='row'>
              <div className='col-2'>Tax Price</div>
              <div className='col-1 text-right'>${taxPrice}</div>
            </div>
            <div className='row'>
              <div className='col-2'>Shipping Price</div>
              <div className='col-1 text-right'>${shippingPrice}</div>
            </div>

            <div className='row'>
              <div className='col-2'>
                <strong>Total Price</strong>
              </div>
              <div className='col-1 text-right'>
                <strong>${totalPrice}</strong>
              </div>
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
