// useRef,
// useMemo,
// useReducer,
// useCallback,
// useImperativeHandle,
import ToggleThemeProvider from 'contexts/ToggleThemeProvider';
import React from 'react';
import AppRoutes from 'routes/app.routes';
import GlobalStyle from 'styles/GlobalStyle';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <ToggleThemeProvider>
        <AppRoutes />
      </ToggleThemeProvider>
    </>
  );
};

export default App;
