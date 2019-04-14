import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={() => <h1>Home</h1>} />
        <Route path="/users" component={() => <h1>users! (secret page...shhhhhhh!)</h1>} />
      </Router>
    );
  }
}

export default App;
