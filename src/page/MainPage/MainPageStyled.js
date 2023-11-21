import styledd from 'styled-components';
import bg from '../../img/head-bg.png';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export const MainContainer = styledd('div')`
   background: linear-gradient(180deg, hsla(0, 0%, 9%, 0), #181818), url(${bg});
   background-size: cover;
   height: 650px;
   width: 100%;
   padding: 40px;
`;

export const TittleMain = styledd('div')({
   color: 'var(--main-text-color)',
   fontSize: 48,
   fontWeight: 900,
   lineHeight: '100%',
   marginBottom: 42,
   textTransform: 'uppercase',
   paddingTop: 30,
   paddingeft: 20,
});

export const ButtonShowMore = styledd('button')({
   backgroundColor: '#242424',
   border: '1px solid #454545',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: '20px',
   color: 'var(--main-text-color)',
   cursor: 'pointer',
   fontSize: '14px',
   fontWeight: 800,
   height: 78,
   lineHeight: '143%',
   margin: '41px auto 0',
   textTransform: 'uppercase',
   transition: 'var(--transitionButton)',
   width: '370px',
   '&: hover ': {
      backgroundColor: 'var(--main-green-color)',
      transition: 'all .2s ease',
   },
});
export const NewSwitch = styled((props) => (
   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
   width: 42,
   height: 26,
   padding: 0,
   border: '1px solid #454545',
   borderRadius: '20px',
   '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
         transform: 'translateX(16px)',
         color: '#fff',
         '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.mode === 'dark' ? '#3f9c14' : '#3f9c14',
            opacity: 1,
            border: 0,
         },
         '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
         },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
         color: '#33cf4d',
         border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
         color: theme.palette.mode === 'light' ? '#3f9c14' : '#3f9c14',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
         opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
   },
   '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
   },
   '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '##3f9c14' : '#3f9c14',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
         duration: 500,
      }),
   },
}));
