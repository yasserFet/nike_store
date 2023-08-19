import React from 'react'
import Title from './Title';
import Items from './Items';

export default function Sales({ isExist,endpoint: { title, items } }) {
  return (
    <div className="nike-container mx-auto">
      <Title title={title} />
      <div className={`grid items-center justify-items-center  gap-7 lg:gap-5 mt-7 ${isExist?"grid-cols-3 xl:grid-cols-2 md:grid-cols-1" :"grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"}`}>
        {items.map((item, i) => {
          return <Items key={i} {...item} isExist={isExist} />;
        })}
      </div>
    </div>
  );
}

