import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

// Create a root for the React application and render the App component
const root = createRoot(document.getElementById('root'));

// Render the application within StrictMode and BrowserRouter
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
