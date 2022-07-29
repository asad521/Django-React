import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';


import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { Login } from './features/counter/login';
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <Provider store={store}>

  <Router>

    <Routes>
      <Route path="/" element={<Login></Login>} />
      <Route path="/articles/" element={<App></App>} />
    </Routes>
  </Router>

  </Provider>
);

