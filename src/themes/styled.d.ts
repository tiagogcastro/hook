import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      switch: {
        primary: string;
        secondary: string;
        shadow: {
          type1: string;
          type2: string;
          type3: string;
        };
        background: {
          type1: string;
          type2: string;
          type3: string;
        };
        border: {
          type1: string;
          type2: string;
          type3: string;
        };
      };
    };
  }
}
