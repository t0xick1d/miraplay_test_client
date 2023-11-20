import React from 'react';
import {
   GameUl,
   GameItem,
   GameImg,
   TitleGame,
   DescGame,
   GenreGame,
   InTop,
   Genre,
} from './GameListStyle';

const GameList = ({ games = [] }) => {
   return (
      <GameUl>
         {games.map((e) => {
            return (
               <GameItem key={e._id}>
                  <GameImg src={e.gameImage} alt={`${e.seystemName} img`} />
                  <div style={{ padding: 32 }}>
                     <TitleGame>{e.systemGameName}</TitleGame>
                     <DescGame>
                        {e.gameDescription.length > 50
                           ? `${e.gameDescription.substring(0, e.gameDescription.length / 2)} ...`
                           : e.gameDescription}
                     </DescGame>
                  </div>

                  <GenreGame>
                     {e.inTop ? <InTop>Top</InTop> : ''}
                     <Genre>{e.genre}</Genre>
                  </GenreGame>
               </GameItem>
            );
         })}
      </GameUl>
   );
};

export default GameList;
