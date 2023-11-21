import React from 'react';
import Header from '../../components/Header/Header';
import { useGetGamesQuery } from './../../redux-store/game/gameApi';
import { TittleMain, MainContainer, ButtonShowMore, NewSwitch } from './MainPageStyled';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem, updatePage, updateNewSwitch } from '../../redux-store/game/gameSliceQuery';
import FilterCategories from '../../components/FilterCategories/FilterCategories';
import GameList from '../../components/GameList/GameList';
import Spiner from '../../components/Spiner/Spiner';

const MainPage = () => {
   const page = useSelector((state) => state.gameSlice.page);
   const activeItem = useSelector((state) => state.gameSlice.activeItem);
   const isFreshGamesFirst = useSelector((state) => state.gameSlice.isFreshGamesFirst);
   const dispatch = useDispatch();

   const { data, isLoading } = useGetGamesQuery({
      genre: activeItem === 'ALL' ? false : activeItem,
      page: page,
      isFreshGamesFirst: isFreshGamesFirst,
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
            <div style={{ display: 'flex' }}>
               <FilterCategories updateActiveItemFunc={updateActiveItemFunc} />
               <div
                  style={{
                     fontSize: 24,
                     fontWeight: 600,
                     lineHeight: '100%',
                     marginBottom: 42,
                     textTransform: 'uppercase',
                     marginRight: 15,
                  }}
               >
                  New
                  <NewSwitch
                     checked={isFreshGamesFirst}
                     onChange={() => {
                        dispatch(updateNewSwitch());
                     }}
                  />
               </div>
            </div>
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
