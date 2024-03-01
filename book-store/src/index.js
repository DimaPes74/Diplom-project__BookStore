import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router'; 
// import App from './App';
import Router from './routing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);


