// useRef,
// useMemo,
// useState,
// useEffect,
// useContext,
// useReducer,
// useCallback,
// useImperativeHandle,
import React from 'react';
import AppRoutes from './routes/app.routes';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
};

export default App;
