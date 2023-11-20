import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem, updatePage } from '../../redux-store/game/gameSliceQuery';
import { FilterContainerUl, FilterItem, ButtonShowMore } from './FilterStyle';
import GameList from '../GameList/GameList';

const FilterCategories = () => {
   const genreList = useSelector((state) => state.gameSlice.genreList);
   const activeItem = useSelector((state) => state.gameSlice.activeItem);
   const page = useSelector((state) => state.gameSlice.page);
   const dispatch = useDispatch();

   const updateActiveItemFunc = (e) => {
      dispatch(setActiveItem(e));
      dispatch(updatePage(1));
   };

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
         <GameList />
         <ButtonShowMore onClick={() => dispatch(updatePage(page + 1))}>Show more</ButtonShowMore>
      </>
   );
};

export default FilterCategories;
