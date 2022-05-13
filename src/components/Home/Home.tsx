import React from 'react';
import './Home.scss';
import Card from '../Card/Card';
import { faker } from '@faker-js/faker';
import Image from '../Card/Image';
const Home = () => {
  return (
    <div>
      <div>
        <form>
          <label>Looking for product</label>
          <input />
        </form>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-4 col-md-6 mt-2 pb-3 pt-3'>
            <Card
              title='KETO Baton Coco Bar 40g z nerkowcami - na dietę keto, smaczna przekąska'
              description='Keto Coco Bar to specjalnie opracowana przekąska, zamiennik posiłku w formie pysznego batonika.'
            />
          </div>
          <div className='d-none col-xl-4 col-md-6 mt-2 pb-3 pt-3 '>
            <Card
              title='Galaretka blok naturalne AGAR Stans PRL 1kg'
              description='Galaretka na bazie agaru, 5-warstwowa, 4-kolorowa, wielosmakowa, w postaci bloku. Nieocukrzana.'
            />
          </div>
          <div className='col-xl-4 col-md-6 mt-2 pb-3 pt-3 '>
            <Card
              title='Toffifee Coconut Czekoladki Kokosowe 125 g'
              description='Cały orzech laskowy w karmelu, kremie kokosowym i czekoladzie. Letnia i wyjątkowa edycja Toffifee.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
