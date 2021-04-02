import { GlobalStyle } from '@styles/GlobalStyle'
import AppRoutes from '@routes/app.routes'
// useRef,
// useMemo,
// useState,
// useEffect,
// useContext,
// useReducer,
// useCallback,
// useImperativeHandle,
import React from 'react'

const App: React.FC = (): JSX.Element => {
   return (
      <>
         <GlobalStyle />
         <AppRoutes />
      </>
   )
}

export default App
