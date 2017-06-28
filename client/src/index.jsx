import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  IndexRoute
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/rootReducer.js';

const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);

class Index extends Component {

  componentWillMount() {
    console.log('mounted')
  }

  render() {

    return (
      <div>Hello World</div>
    )
  }
}

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
