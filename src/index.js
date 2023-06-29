import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import RouteSwitch from './RouteSwitch';
import { AuthContextProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <RouteSwitch />
    </React.StrictMode>
  </AuthContextProvider>
);
