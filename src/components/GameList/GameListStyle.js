import styled from 'styled-components';

export const GameUl = styled('ul')({
   display: 'flex',
   flexWrap: 'wrap',
   gap: 30,
   marginTop: 65,
   width: '100%',
});

export const GameItem = styled('li')({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-start',
   width: '370px',
   height: '565px',
   background: '#1c1c1c',
   border: '1px solid #454545',
   borderRadius: 20,
   cursor: 'pointer',
   opacity: 1,
   outline: 'none',
   overflow: 'hidden',
   position: 'relative',
   transition: 'all .3s ease-in',
});

export const GameImg = styled('img')({
   borderRadius: '20px 20px 0 0',
   height: 335,
   minHeight: 335,
   objectFit: 'cover',
   objectPosition: 'center',
   width: '100%',
});

export const TitleGame = styled('h4')({
   color: 'var(--main-text-color)',
   fontSize: 22,
   fontWeight: 800,
   marginBottom: 6,
   textTransform: 'uppercase',
});
export const DescGame = styled('p')({
   color: 'var(--second-text-color)',
   fontSize: 12,
   fontWeight: 300,
});

export const GenreGame = styled('div')({
   display: 'flex',
   gap: 8,
   left: 20,
   position: 'absolute',
   top: 20,
});

export const InTop = styled('div')({
   backdropFilter: 'blur(10px)',
   background: 'var(--main-green-color)',
   alignItems: 'center',
   borderRadius: 10,
   color: 'var(--main-text-color)',
   display: 'flex',
   padding: '5px 10px',
});

export const Genre = styled('div')({
   backdropFilter: 'blur(20px)',
   borderRadius: 10,
   color: 'var(--main-text-color)',
   padding: '5px 10px',
});
