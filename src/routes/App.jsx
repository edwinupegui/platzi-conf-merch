import React from 'react';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkuot" component={Checkout} />
        <Route exact path="/checkuot/information" component={Information} />
        <Route exact path="/checkout/payment" component={Pay} />
        <Route exact path="/checkout/success" component={} />
        <Route component={NotFount} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;