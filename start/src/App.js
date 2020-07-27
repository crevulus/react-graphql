import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import Posts from "./components/Posts";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./App.css";
import "./bootstrap.min.css";
import logo from "./SpaceX-Logo.png";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{ width: 300 }} />
          <h1>Spaceman says everybody look down</h1>
          <Route exact path="/" component={Users} />
          <Route path="/user/:userId" component={User} />
          <Route path="/posts/:userId" component={Posts} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
