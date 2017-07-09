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

import Console from './components/console.jsx';
import SignUp from './components/signup.jsx';
import Login from './components/login.jsx';
import NavBar from './components/NavBar.jsx';

const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);

store.dispatch({type:'LOGOUT_ERROR'});

class Index extends Component {

  componentWillMount() {
    console.log('mounted')
  }

  render() {

    return (
      <div>
      <div>Hello World</div>
      <Router>
        <div>
        <NavBar />
          <Route exact path="/" component={Console} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
        </Router>
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
