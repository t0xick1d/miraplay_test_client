import React from 'react';
import { useSelector } from 'react-redux';
import { FilterContainerUl, FilterItem } from './FilterStyle';


const FilterCategories = ({ updateActiveItemFunc }) => {
   const genreList = useSelector((state) => state.gameSlice.genreList);
   const activeItem = useSelector((state) => state.gameSlice.activeItem);
   return (
      <>
         <FilterContainerUl>
            {genreList.map((e, i) => {
               return (
                  <FilterItem
                     onClick={() => updateActiveItemFunc(e)}
                     key={i}
                     style={{ backgroundColor: e === activeItem ? 'green' : '' }}
                  >
                     {e}
                  </FilterItem>
               );
            })}
         </FilterContainerUl>
      </>
   );
};

export default FilterCategories;
