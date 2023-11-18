import styled from 'styled-components';

export const HeaderContainer = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   height: 90,
   borderBottom: '1px solid #454545',
});
export const LogoContainer = styled('div')({
   display: 'flex',
});
export const LogoTitle = styled('div')({
   textTransform: 'uppercase',
   color: '#faf9f7',
   fontSize: 18,
   fontWeight: 800,
});
export const LogoText = styled('div')({
   color: 'var(--second-text-color)',
   fontSize: 14,
   fontWeight: 300,
});
export const Categories = styled('div')({
   alignItems: 'center',
   border: '1px solid #454545',
   padding: 10,
   borderRadius: 10,
   display: 'flex',
   fontWeight: 700,
   height: 42,
   justifyContent: 'center',
   width: 72,
});
export const Game = styled('div')({});
export const UserHeader = styled('div')({
   display: 'flex',
   alignItems: 'center',
   flexWrap: 'wrap',
   textAlign: 'left',
   color: 'var(--second-text-color)',
   marginRight: 10,
});
export const Button = styled('button')({
   alignItems: 'center',
   display: 'flex',
   justifyContent: 'center',
   background: 'rgba(63,156,20,.5)',
   border: '1px solid #3f9c14',
   color: '#eaeaea',
   fontSize: 18,
   fontWeight: 800,
   width: 100,
   borderRadius: 10,
   cursor: 'pointer',
   height: 56,
   ':hover': {
      background: 'var(--main-green-color: #3f9c14)',
   },
});
