import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './App.tsx';
import './styles/index.scss';
import '@fontsource-variable/inter';

const root = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
