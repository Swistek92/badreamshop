import './Home.scss';
import Card from '../Card/Card';
import { faker } from '@faker-js/faker';

import { useState } from 'react';
import Search from '../Searcher/Search';

const Home = (props: any) => {
  const { onAdd, products } = props;

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
            className='btn btn-primary'
          >
            Search by name!
          </button>
          <label className='px-3'>Categroy</label>
          <button
            onClick={() => {
              setCategory('steroids');
            }}
            type='button'
            className='btn btn-primary '
          >
            steroids
          </button>
          <button
            onClick={() => {
              setCategory('sweet');
            }}
            type='button'
            className='btn btn-primary  margin-left'
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

      <div className='container content'>
        <div className='row'>{Search(input, category, onAdd, products)}</div>
      </div>
    </div>
  );
};

export default Home;
