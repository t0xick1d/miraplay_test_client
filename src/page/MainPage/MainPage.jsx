import React from 'react';
import Header from '../../components/Header/Header';
import { useGetGamesQuery } from './../../redux-store/game/gameApi';
import { TittleMain, MainContainer, ButtonShowMore } from './MainPageStyled';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem, updatePage } from '../../redux-store/game/gameSliceQuery';
import FilterCategories from '../../components/FilterCategories/FilterCategories';
import GameList from '../../components/GameList/GameList';
import Spiner from '../../components/Spiner/Spiner';

const MainPage = () => {
   const page = useSelector((state) => state.gameSlice.page);
   const dispatch = useDispatch();
   const activeItem = useSelector((state) => state.gameSlice.activeItem);
   const { data, isLoading } = useGetGamesQuery({
      genre: activeItem === 'ALL' ? false : activeItem,
      page: page,
   });

   const updateActiveItemFunc = (e) => {
      dispatch(setActiveItem(e));
      dispatch(updatePage(1));
   };
   return (
      <>
         <Header />
         <MainContainer>
            <TittleMain>All game</TittleMain>
            <FilterCategories updateActiveItemFunc={updateActiveItemFunc} />
            {isLoading ? <Spiner /> : <GameList games={data.games} />}
            {data && data.gamesListLength > data.games.length ? (
               <ButtonShowMore onClick={() => dispatch(updatePage(page + 1))}>
                  Show more
               </ButtonShowMore>
            ) : (
               ''
            )}
         </MainContainer>
      </>
   );
};

export default MainPage;
