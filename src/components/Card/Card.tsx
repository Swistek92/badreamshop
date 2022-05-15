/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import './Card.scss';
import { useNavigate } from 'react-router-dom';

const Card = (props: any) => {
  const { onAdd, img, title, id, products, cartItems } = props;
  let isInBasket = false;

  cartItems.forEach((element: any) => {
    if (element.id === products[id - 1].id) {
      isInBasket = true;
    }
  });

  const navigate = useNavigate();

  return (
    <div className={`card ${isInBasket && 'isInBasket'}`}>
      <img className='card-img-top' src={img} alt='img food card ' />
      <div className='card-body'>
        {isInBasket && <h4>in basket!</h4>}
        <h5 className='card-title'>
          {products[id - 1].name} Price: {products[id - 1].price} $
        </h5>

        <p className='card-title'>{title}</p>

        <a
          onClick={() => {
            navigate(`/product/${id}`);
          }}
          className='btn btn-primary btn-card'
        >
          check it!
        </a>
        <a
          className='btn btn-primary btn-card margin-left'
          onClick={() => {
            onAdd(products[id - 1]);
          }}
        >
          Add to Basket
        </a>
      </div>
    </div>
  );
};

export default Card;
