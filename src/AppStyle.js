import styled from 'styled-components';

export const AppContainer = styled('div')`
   width: 100%;
   min-height: 100vh;
   margin: 0 auto;
   @media screen and (min-width: 375px) {
      max-width: 375px;
   }
   @media screen and (min-width: 768px) {
      max-width: 768px;
   }
   @media screen and (min-width: 1440px) {
      max-width: 1440px;
   }
`;
