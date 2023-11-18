import React from 'react';
import {
   HeaderContainer,
   LogoContainer,
   LogoTitle,
   LogoText,
   Categories,
   Game,
   UserHeader,
   Button,
} from './HeaderStyle';
import { ReactComponent as ReactLogo } from './start.svg';

const Header = () => {
   return (
      <HeaderContainer>
         <LogoContainer>
            <ReactLogo />
            <div
               style={{
                  justifyContent: 'center',
                  alialignItems: 'center',
                  marginLeft: -25,
               }}
            >
               <LogoTitle>Miraplay</LogoTitle>
               <LogoText>Cloud Gaming</LogoText>
            </div>
         </LogoContainer>
         <Categories>
            <Game> Game</Game>
         </Categories>
         <UserHeader>
            <div
               style={{
                  textTransform: 'uppercase',
                  fontSize: 16,
                  marginRight: 10,
                  textAlign: 'right',
               }}
            >
               <div
                  style={{
                     color: '#faf9f7',
                  }}
               >
                  toxic
               </div>
               <div>hexdue@mailto.plus</div>
            </div>
            <Button>Log Out</Button>
         </UserHeader>
      </HeaderContainer>
   );
};

export default Header;
