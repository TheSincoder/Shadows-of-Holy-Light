import { createTheme } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#f0a500',
    },
    secondary: {
      main: '#150050',
    },
    background: {
      default: '#334756',
      paper: '#082032',
    },
    error: {
      main: '#fd0303',
    },
    warning: {
      main: '#ff3d00',
    },
    info: {
      main: '#00b8d4',
    },
    text: {
      primary: '#000000',
      secondary: '#ffee58',
      hint: '#ffff00',
    },
  },
};

const theme = createTheme(themeOptions);

export default theme