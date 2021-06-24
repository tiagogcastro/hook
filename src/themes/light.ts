import { DefaultTheme } from 'styled-components';
import { shade, tint } from 'polished';

export default {
  title: 'light',
  colors: {
    texts: {
      primary: '#555A62',
      secondary: '#555A62'
    },
    inputs: {
      primary: '#F6FAFF'
    },
    avatar: shade(0.01, '#CDD2D8'),
    background: {
      primary: '#f8f9fa',
      secondary: '#CDD2D8',
      ternary: shade(0.08, '#CDD2D8'),
      quaternary: '#101115',
      quinary: '#1F2128'
    },
    hover: {
      primary: '#B3B8C0'
    },
    groups: {
      globals: {
        primary: shade(0.01, '#B3B8C0')
      },
      shadow: {
        primary: shade(0.2, '#B3B8C0')
      }
    },
    searchbar: {
      primary: '#F6FAFF'
    },
    scrollbar: {
      primary: '#ECECEC',
      secondary: '#CDCFD4'
    },
    icons: {
      primary: '#F6FAFF',
      ternary: '#892753',
      quaternary: '#f8f',
      quinary: '#739DE5',
      senary: '#F28465',
      background: {
        primary: '#F6FAFF'
      }
    },
    switch: {
      shadow: {
        primary: tint(0.65, '#892753'),
        secondary: '#F6FAFF',
        ternary: shade(0.07, '#dee2e6')
      },
      background: {
        primary: '#F6FAFF'
      },
      border: {
        primary: tint(0.65, '#892753'),
        secondary: '#fbfbfb',
        ternary: '#F6FAFF'
      }
    }
  }
} as DefaultTheme;
