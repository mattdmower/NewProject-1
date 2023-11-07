import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importing the main CSS file
import './index.css'; // Make sure you have this file for your global styles

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);