import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import AppContextProvider from './context/AppContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <App/>
  </AppContextProvider>
);