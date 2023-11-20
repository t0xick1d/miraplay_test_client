import styled from 'styled-components';

export const FilterContainerUl = styled('ul')({
   display: 'flex',
   alignItems: 'center',
   gap: 5,
   flexWrap: 'wrap',
   maxWidth: '80%',
   borderBottom: '1px solid #454545',
});

export const ButtonShowMore = styled('ul')({
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
   transition: 'all .2s ease',
   width: '370px',
   ':: hover ': {
      backgroundColor: 'var(--main-green-color)',
      transition: 'all .2s ease',
   },
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
   ':hover': {
      backgroundColor: '#faf9f7',
      color: '#faf9f7',
   },
});
