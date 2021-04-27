import { shade, tint } from 'polished';
import { DefaultTheme } from 'styled-components';

export default {
  title: 'dark',
  colors: {
    texts: {
      primary: '#fff'
    },
    inputs: {
      primary: '#30343b'
    },
    background: {
      primary: '#16181E',
      secondary: '#101115'
    },
    avatar: tint(0.01, '#0a0b0c'),
    hover: {
      primary: '#0a0b0c'
    },
    searchbar: {
      primary: '#30343b'
    },
    scrollbar: {
      primary: '#14151A',
      secondary: '#0E1014'
    },
    icons: {
      primary: '#313541',
      ternary: '#00ffe7',
      background: {
        primary: '#313440'
      }
    },
    switch: {
      shadow: {
        primary: '#00ffe7',
        secondary: '#000',
        ternary: '#808080'
      },
      background: {
        primary: '#0F1118'
      },
      border: {
        primary: '#00ffe7',
        secondary: '#0F1118',
        ternary: '#0F1118'
      }
    }
  }
} as DefaultTheme;
