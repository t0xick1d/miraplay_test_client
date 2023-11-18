import styled from 'styled-components';
import bg from './head-bg.png';

export const MainContainer = styled('div')`
   background: linear-gradient(180deg, hsla(0, 0%, 9%, 0), #181818), url(${bg});
   background-size: cover;
   height: 650px;
   width: 100%;
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
