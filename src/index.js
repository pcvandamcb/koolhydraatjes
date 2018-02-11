import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import './style.scss';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

render(
  <HashRouter>
    <div>
      <Route exact path="/" component={ProductList} />
      <Route exact path="/product/:id" component={ProductDetails} />
    </div>
  </HashRouter>,
  document.getElementById('root-koolhydraatjes')
);
