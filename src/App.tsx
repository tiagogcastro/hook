// useRef,
// useMemo,
// useReducer,
// useCallback,
// useImperativeHandle,
import ToggleThemeProvider from 'contexts/ToggleThemeProvider';
import React from 'react';
import AppRoutes from 'routes/app.routes';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <ToggleThemeProvider>
        <AppRoutes />
      </ToggleThemeProvider>
    </>
  );
};

export default App;
