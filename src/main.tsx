import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/styles/global.scss';
import './app/styles/vars.scss';
import { SelectedItemsProvider } from './app/contexts/SelectedItemsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SelectedItemsProvider>
      <App />
    </SelectedItemsProvider>
  </React.StrictMode>
);
