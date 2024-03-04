import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router'; 
import { Provider } from 'react-redux';
import Router from './routing';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={Router}/>
    </Provider>
  </React.StrictMode>
);


