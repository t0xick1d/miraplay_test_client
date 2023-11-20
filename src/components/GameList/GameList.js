import React from 'react';
import { useSelector } from 'react-redux';
import Spiner from './../Spiner/Spiner';
import { useGetGamesQuery } from './../../redux-store/game/gameApi';

const GameList = () => {
   const activeItem = useSelector((state) => state.gameSlice.activeItem);
   const page = useSelector((state) => state.gameSlice.page);
   const { data, isLoading } = useGetGamesQuery({
      genre: activeItem,
      page: page,
   });

   console.log(data);

   return <>{isLoading ? <Spiner /> : <div>GameList</div>}</>;
};

export default GameList;
