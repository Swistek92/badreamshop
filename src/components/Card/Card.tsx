/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import './Card.scss';
import { useNavigate } from 'react-router-dom';

const Card = (props: any) => {
  const { onAdd, img, title, describe, id, products } = props;

  let navigate = useNavigate();

  return (
    <div className='card'>
      <img className='card-img-top' src={img} alt='img food card ' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{describe}</p>
        <a
          onClick={() => {
            navigate(`/product/${id}`);
          }}
          className='btn btn-primary btn-card'
        >
          check it!
        </a>
        <a
          className='btn btn-primary btn-card'
          onClick={() => {
            onAdd(products[id - 1]);
          }}
        >
          {' '}
          Add to Basket
        </a>
      </div>
    </div>
  );
};

export default Card;
