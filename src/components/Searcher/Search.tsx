import { type } from 'os';
import React from 'react';
import Card from '../Card/Card';

const Search = (
  word: string,
  category: string,
  onAdd: Function,
  products: any,
  cartItems: any
) => {
  const validCard: {
    title: string;
    describe: string;
    img: string;
    id: number;
    category: string;
  }[] = [];

  products.forEach((card: any) => {
    if (category === 'all') {
      if (JSON.stringify(card).toLowerCase().includes(word)) {
        validCard.push(card);
      }
    } else {
      if (card.category.toLowerCase().includes(category.toLowerCase())) {
        validCard.push(card);
      }
    }
  });

  return validCard.map((card) => {
    return (
      <div
        key={card.id}
        className='col-xxl-3 col-xl-4 col-md-6 mt-2 pb-3 pt-3 '
      >
        <Card
          id={card.id}
          category={card.category}
          title={card.title}
          describe={card.describe}
          img={card.img}
          onAdd={onAdd}
          products={products}
          cartItems={cartItems}
        />
      </div>
    );
  });
};

export default Search;
