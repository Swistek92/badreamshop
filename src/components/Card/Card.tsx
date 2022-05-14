/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import './Card.scss';
const Card = (props: any) => {
  return (
    <div className='card'>
      <img className='card-img-top' src={props.img} alt='img food card ' />
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.describe}</p>
        <a href='#' className='btn btn-primary btn-card'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
