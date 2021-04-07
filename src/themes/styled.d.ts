import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      text: string;
      primary: string;
      secondary: string;
      hover: {
        primary: string;
      };
      searchbar: {
        primary: string;
      };

      scrollbar: {
        primary: string;
        secondary: string;
      };
      icons: {
        primary: string;
        ternary: string;
      };
      switch: {
        primary: string;
        shadow: {
          primary: string;
          secondary: string;
          ternary: string;
        };
        background: {
          primary: string;
        };
        border: {
          primary: string;
          secondary: string;
          ternary: string;
        };
      };
    };
  }
}
