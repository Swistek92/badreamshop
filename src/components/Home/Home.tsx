import './Home.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../Searcher/Search';

const Home = (props: any) => {
  const navigate = useNavigate();
  const { onAdd, products, cartItems } = props;

  const [input, setInput] = useState('');
  const [category, setCategory] = useState('all');
  return (
    <div>
      <div className='container searcher '>
        <div className='btn-group' role='group'>
          <button
            onClick={() => {
              setCategory('all');
              setInput('');
            }}
            type='button'
            className='btn btn-search'
          >
            Search by name!
          </button>
          <label className='px-3'>Categroy</label>
          <button
            onClick={() => {
              setCategory('steroids');
            }}
            type='button'
            className='btn btn-search '
          >
            steroids
          </button>
          <button
            onClick={() => {
              setCategory('sweet');
            }}
            type='button'
            className='btn btn-search  margin-left'
          >
            sweet
          </button>
        </div>
        {category === 'all' && (
          <form>
            <label>Looking for product</label>
            <input
              className='form-control form-control-lg'
              type='text'
              placeholder='Looking for product'
              aria-label='.form-control-lg example'
              onChange={(e) => setInput(e.target.value.toLowerCase())}
            />
          </form>
        )}
      </div>
      {cartItems.length > 1 && (
        <div className='container'>
          <button
            className='butonBasket '
            onClick={() => {
              navigate(`/basket/`);
            }}
          >
            Go to Cart
          </button>
        </div>
      )}

      <div className='container content'>
        <div className='row'>
          {Search(input, category, onAdd, products, cartItems)}
        </div>
      </div>
    </div>
  );
};

export default Home;
