import styled from 'styled-components';
import bg from '../../img/head-bg.png';

export const Backgrount = styled('div')`
   background: linear-gradient(180deg, hsla(0, 0%, 9%, 0), #181818), url(${bg});
   background-size: cover;
   height: 650px;
   width: 100%;
   padding: 40px;
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 630px;
   justify-content: center;
   margin: 0 auto;
   position: relative;
   width: 100%;
`;
export const Container = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-start',
   width: '370px',
   height: '370px',
   background: '#1c1c1c',
   border: '1px solid #454545',
   borderRadius: 20,
   opacity: 1,
   position: 'relative',
});
export const LogoContainer = styled('div')({
   display: 'flex',
   padding: 15,
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
export const LabelForm = styled('label')({
   fontSize: 14,
   fontWeight: 800,
   justifyContent: 'center',
   padding: '15px 0px',
   textTransform: 'uppercase',
});
export const InputForm = styled('input')({
   background: '#1c1c1c',
   border: '1px solid #454545',
   borderRadius: 10,
   color: 'var(--main-text-color)',
   fontSize: 16,
   fontWeight: 300,
   padding: 5,
   width: '90%',
   '&:hover, &:focus': {
      border: '1px solid var(--main-green-color)',
      outline: 'none',
   },
});
export const ButtonSubmit = styled('button')({
   alignItems: 'center',
   background: '#242424',
   border: '1px solid #454545',
   borderRadius: '10px',
   color: 'var(--main-text-color)',
   cursor: 'pointer',
   display: 'flex',
   fontSize: 14,
   fontWeight: 800,
   marginTop: 15,
   marginRight: 5,
   height: 46,
   justifyContent: 'center',
   lineHeight: '143%',
   padding: '0 25px',
   textTransform: 'uppercase',
   transition: 'var(--transitionButton)',
   '&:hover': {
      backgroundColor: 'var(--main-green-color)',
      color: '#faf9f7',
   },
});
