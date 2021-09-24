import { extendTheme } from '@chakra-ui/react';
import Button from '../components/button';
const theme = extendTheme({
  components: {
    Button
  },
  fonts: {
    heading: 'Heebo',
    body: 'Roboto'
  },
  colors: {
    blue: {
      100: '#004170',
      200: '#39A2DB',
      300: '#A2DBFA'
    },
    greyScale: {
      400: '#000000',
      500: '#E8F0F2',
      600: '#C4C4C4',
      700: '#FFFFFF'
    }
  }
});

export default theme;
