import styled from 'styled-components';

export const FilterContainerUl = styled('ul')({
   display: 'flex',
   alignItems: 'center',
   gap: 5,
   flexWrap: 'wrap',
   maxWidth: '100%',
   borderBottom: '1px solid #454545',
});

export const FilterItem = styled('li')({
   alignItems: 'center',
   background: '#242424',
   border: '1px solid #454545',
   borderRadius: '10px',
   color: 'var(--main-text-color)',
   cursor: 'pointer',
   display: 'flex',
   fontSize: 14,
   fontWeight: 800,
   marginRight: 5,
   height: 46,
   justifyContent: 'center',
   lineHeight: '143%',
   padding: '0 25px',
   textTransform: 'uppercase',
   transition: 'var(--transitionButton)',
   '&:hover': {
      backgroundColor: '#faf9f7',
      color: '#242424',
   },
});
