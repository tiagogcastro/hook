import { DefaultTheme } from 'styled-components';

export default {
  title: 'light',
  colors: {
    text: '#222',
    primary: '#f8f9fa',
    secondary: '#dee2e6',
    hover: {
      primary: '#CCCFD5'
    },
    searchbar: {
      primary: '#fff'
    },
    scrollbar: {
      primary: '#ECECEC',
      secondary: '#CDCFD4'
    },
    icons: {
      primary: '#fff',
      ternary: '#ddd'
    },

    switch: {
      shadow: {
        primary: '#fff',
        secondary: '#fff',
        ternary: '#dee2e6'
      },
      background: {
        primary: '#fff'
      },
      border: {
        primary: '#c3c3c370',
        secondary: '#fbfbfb',
        ternary: '#fff'
      }
    }
  }
} as DefaultTheme;
