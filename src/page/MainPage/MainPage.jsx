import React from 'react';
import Header from '../../components/Header/Header';
import { TittleMain, MainContainer } from './MainPageStyled';
import FilterCategories from '../../components/FilterCategories/FilterCategories';

const MainPage = () => {
   return (
      <>
         <Header />
         <MainContainer>
            <TittleMain>All game</TittleMain>
            <FilterCategories />
         </MainContainer>
      </>
   );
};

export default MainPage;
