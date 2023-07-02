import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import RouteSwitch from './RouteSwitch';
import { AuthContextProvider } from './contexts/AuthContext';
import { ChatContextProvider } from './contexts/ChatContext';
import { PostContextProvider } from './contexts/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <PostContextProvider>
        <React.StrictMode>
          <RouteSwitch />
        </React.StrictMode>
      </PostContextProvider>
    </ChatContextProvider>
  </AuthContextProvider>
);
