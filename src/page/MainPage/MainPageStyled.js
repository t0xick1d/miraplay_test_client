import styled from 'styled-components';
import bg from '../../img/head-bg.png';

export const MainContainer = styled('div')`
   background: linear-gradient(180deg, hsla(0, 0%, 9%, 0), #181818), url(${bg});
   background-size: cover;
   height: 650px;
   width: 100%;
   padding: 40px;
`;

export const TittleMain = styled('div')({
   color: 'var(--main-text-color)',
   fontSize: 48,
   fontWeight: 900,
   lineHeight: '100%',
   marginBottom: 42,
   textTransform: 'uppercase',
   paddingTop: 30,
   paddingeft: 20,
});

export const ButtonShowMore = styled('button')({
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
