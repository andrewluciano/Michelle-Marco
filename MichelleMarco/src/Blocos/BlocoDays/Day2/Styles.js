import { styled } from '/src/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '521px',
  height: '751px',
  color: '$nwBlue900',
  gap: '10px',
  flexWrap: 'wrap',
  flex: '1',

  backgroundColor: 'white',
  '@md': {
    // backgroundColor: 'red',
  },
});
