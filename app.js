import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ShoppingCart from './src/Components/ShoppingCart';
import OrderingTable from './src/Components/OrderingTable';
import Invoice from './src/Components/Invoice';

render((
  <Router history={browserHistory}>
    <Route path='/' component={ShoppingCart}>
      <IndexRoute component={OrderingTable} />
      <Route path='/invoice' component={Invoice} />
    </Route>
  </Router>
  ), document.getElementById('mount-point')
);