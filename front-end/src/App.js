import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPageContainer from './containers/LoginPageContainer';
import UserPageContainer from './containers/UserPageContainer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={LoginPageContainer} />
          <Route path="/users" component={UserPageContainer} />
        </Router>
      </Provider>
    );
  }
}

export default App;
