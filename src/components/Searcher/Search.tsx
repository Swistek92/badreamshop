import React from 'react';
import Card from '../Card/Card';
import data from '../Data/Data';

const Search = (word: string, category: string) => {
  const validCard: {
    title: string;
    describe: string;
    img: string;
    id: number;
    category: string;
  }[] = [];

  console.log(category);

  data.forEach((card) => {
    if (category === 'all') {
      if (JSON.stringify(card).toLowerCase().includes(word)) {
        validCard.push(card);
      }
    } else {
      if (card.category.toLowerCase().includes(category)) {
        validCard.push(card);
      }
    }
  });

  return validCard.map((card) => {
    return (
      <div className='col-xxl-3 col-xl-4 col-md-6 mt-2 pb-3 pt-3 '>
        <Card
          id={card.id}
          category={card.category}
          title={card.title}
          describe={card.describe}
          img={card.img}
        />
      </div>
    );
  });
};

export default Search;
