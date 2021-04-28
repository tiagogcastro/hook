import AppProvider from 'contexts';
import React from 'react';
import AppRoutes from 'routes/app.routes';
import GlobalStyle from 'styles/GlobalStyle';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <AppRoutes />
      </AppProvider>
    </>
  );
};

export default App;
