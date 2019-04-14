import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPageContainer from './containers/LoginPageContainer';
import UserPageContainer from './containers/UserPageContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={LoginPageContainer} />
        <Route path="/users" component={UserPageContainer} />
      </Router>
    );
  }
}

export default App;
