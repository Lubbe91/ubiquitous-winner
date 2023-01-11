export const mainStyle = {
  display: 'grid',
  gap: '1.2rem',
  gridTemplateColumns: 'repeat(4, 1fr)',

  '@media screen and (max-width: 60em)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media screen and (max-width: 40em)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
};
