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
import { ReactComponent as ReactLogo } from '../../img/start.svg';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux-store/auth/operations';
import { useSelector } from 'react-redux';

const Header = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.auth.user);

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
                  {user.nickName}
               </div>
               <div>{user.email}</div>
            </div>
            <Button onClick={() => dispatch(logOut())}>Log Out</Button>
         </UserHeader>
      </HeaderContainer>
   );
};

export default Header;
