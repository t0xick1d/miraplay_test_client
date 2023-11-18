import React from 'react';
import { FilterContainerUl, FilterItem } from './FilterStyle';

const FilterCategories = () => {
   const genreList = [
      'ALL',
      'FREE',
      'MOBA',
      'SHOOTERS',
      'LAUNCHERS',
      'MMORPG',
      'STRATEGY',
      'FIGHTING',
      'RACING',
      'SURVIVAL',
      'ONLINE',
   ];

   return (
      <>
         <FilterContainerUl>
            {genreList.map((e, i) => {
               return <FilterItem key={i}>{e}</FilterItem>;
            })}
         </FilterContainerUl>
      </>
   );
};

export default FilterCategories;
