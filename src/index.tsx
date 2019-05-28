import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Articles from './Articles';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/About/" component={About} />
    <Route path="/Articles/" component={Articles} />
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister(); // https://bit.ly/CRA-PWA
