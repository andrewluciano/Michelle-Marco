import { styled } from '/src/stitches.config';

export const Container = styled('div', {
  transition: 'all 0.2s ease-in-out',
  position: 'fixed',
  left: '0%',
  display: 'flex',
  top: '0%',
  width: '100%',
  height: '100%',
  zIndex: '9999',
  color: '$nwBlue900',

  backgroundColor: 'rgba(0,0,0,0.4)',

  '@md': {
    // backgroundColor: 'red',
  },
});

export const AreaModal = styled('div', {
  transition: 'all 0.2s ease-in-out',
  position: 'fixed',
  flexDirection: 'column',
  display: 'flex',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',

  Width: 'auto',
  height: 'auto',
  color: '$nwBlue900',
  borderRadius: '$xl',
  padding: '40px 37px 40px 37px',
  boxShadow: '0px 0px 5px rgba(0,0,0,0.3)',
  backgroundColor: 'white',
  zIndex: '999',
  '@md': {
    // backgroundColor: 'red',
  },
});

export const Head = styled('div', {
  display: 'flex',
  width: '100%',
  maxHeight: '50px',
  color: '$nwBlue900',

  flexWrap: 'wrap',
  flex: '1',

  backgroundColor: 'white',

  '@md': {
    // backgroundColor: 'red',
  },
});
export const Body = styled('div', {
  display: 'flex',
  overflow: 'auto',
  width: '100%',
  height: 'auto',
  gap: '10px',
  color: '$colorPrimary',
  flexWrap: 'wrap',
  flex: '1',

  backgroundColor: 'white',
  '@md': {
    // backgroundColor: 'red',
  },
});

export const Titulo = styled('h2', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  color: '$black',
  fontSize: '$nw2xL',
  gap: '10px',
});

export const BotaoFechar = styled('button', {
  transition: 'all 0.2s ease-in-out',
  position: 'absolute',
  top: '17px',
  right: '19px',
  display: 'block',
  borderRadius: '12px',
  border: '1px solid $nwGray200',
  width: '40px',
  height: '40px',
  backgroundColor: '$bgPrimary',
  color: '$colorPrimary',
  cursor: 'pointer',
  boxShadow:'0px 0px 10px rgba(0,0,0,0.1)',
  '&:after': {
    position: 'absolute',
    top: '50%',
    left: '0%',
    width: '12.5px',
    height: '12.5px',
    transform: 'translate(44%,-68%) rotate(45deg)',
    lineHeight: '0px',
    display: 'block',
    textAlign: 'center',
    content: '+',
    fontFamily: '$inter',
    fontSize: '2.5rem',
    fontWeight: '400',
  },
  '&:hover': {
    backgroundColor: '$nwSlate200',
  },
});

export const AreaIcone = styled('div', {
  width: '40px',
  height: '40px',
  lineHeight: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '12px',
  boxSizing: 'borderBox',
  color: '$colorPrimary',
  backgroundColor: '$nwOrange50',
});