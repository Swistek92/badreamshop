import './Home.scss';
import Card from '../Card/Card';
import { faker } from '@faker-js/faker';

import { useState } from 'react';

const Home = () => {
  const [input, setInput] = useState('');

  const cards = [
    {
      title:
        'KETO Baton Coco Bar 40g z nerkowcami - na dietę keto, smaczna przekąska',
      describe:
        'Keto Coco Bar to specjalnie opracowana przekąska, zamiennik posiłku w formie pysznego batonika.',
      img: 'https://amixnutrition.pl/wp-content/uploads/2020/09/baton-na-ketoze-z-narkowcami-600x600.jpg',
    },
    {
      title: 'Galaretka blok naturalne AGAR Stans PRL 1kg',
      describe:
        'Galaretka na bazie agaru, 5-warstwowa, 4-kolorowa, wielosmakowa, w postaci bloku. Nieocukrzana.',
      img: 'https://image.ceneostatic.pl/data/products/94396808/f-stans-galaretka-blok-1kg.jpg',
    },
    {
      title: 'Toffifee Coconut Czekoladki Kokosowe 125 g',
      describe:
        'Cały orzech laskowy w karmelu, kremie kokosowym i czekoladzie. Letnia i wyjątkowa edycja Toffifee.',
      img: 'https://ilovesweets.pl/public/upload/catalog/product/782/minigallery/thumb_xlarge_1647731369TOFFIFEE_COCONUT_125G-png.webp',
    },

    {
      title: 'KAWA BRAZILLIANA TOUCANO Świeżo Palona z Palarni',
      describe:
        'W naszej palarni nie ma miejsca na kompromisy, dla każdej kawy indywidualnie dobieramy profil palenia, aby wydobyć z kawy jak najwięcej jej oryginalnych aromatów.',
      img: 'https://a.allegroimg.com/s720/11815f/a556a883496baaddd3ba37f4524f/KAWA-BRAZILLIANA-TOUCANO-Swiezo-Palona-z-Palarni-Kod-producenta-5904507971007',
    },
    {
      title: 'OLIMP CREATINE XPLODE POWDER 500 g KREATYNA SIŁA',
      describe:
        'Doskonała kompozycja najbardziej zaawansowanych form kreatyny, charakteryzujących się najwyższą aktywnością anaboliczną i wzorem przemian energetycznych. Creatine Xplode to zestawienie w jednym, unikatowym, produkcie aż 6 najpopularniejszych i najbardziej skutecznych form kreatyn, stosowanych obecnie na świecie w zaawansowanej suplementacji sportowców.',
      img: 'https://a.allegroimg.com/s720/037034/911965b64eb0b72974daf1d61dd6/OLIMP-CREATINE-XPLODE-POWDER-500-g-KREATYNA-SILA-EAN-5901330055218',
    },
  ];

  const render = () => {
    const validCard: { title: string; describe: string; img: string }[] = [];
    cards.forEach((card) => {
      if (JSON.stringify(card).toLowerCase().includes(input)) {
        validCard.push(card);
      }
    });

    if (input.length < 3) {
      return cards.map((card) => {
        return (
          <div className='col-xxl-3 col-xl-4 col-md-6 mt-2 pb-3 pt-3 '>
            <Card
              title={card.title}
              description={card.describe}
              img={card.img}
            />
          </div>
        );
      });
    } else {
      return validCard.map((card) => {
        return (
          <div className='col-xxl-3 col-xl-4 col-md-6 mt-2 pb-3 pt-3 '>
            <Card
              title={card.title}
              description={card.describe}
              img={card.img}
            />
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div>
        <form>
          <label>Looking for product</label>
          <input onChange={(e) => setInput(e.target.value.toLowerCase())} />
        </form>
      </div>
      <div className='container '>
        <div className='row'>{render()}</div>
      </div>
    </div>
  );
};

export default Home;
