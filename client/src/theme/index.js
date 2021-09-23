import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Heebo',
    body: 'Roboto'
  },
  colors: {
    brand: {
      100: '#053742',
      200: '#39A2DB',
      300: '#A2DBFA',
      400: '#E8F0F2',
      500: '#000000',
      600: '#FFFFFF'
    }
  }
});

export default theme;
