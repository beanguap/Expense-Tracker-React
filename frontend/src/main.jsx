import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
