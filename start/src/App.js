import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import Posts from "./components/Posts";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./App.css";
import "./bootstrap.min.css";
import NavBar from "./components/NavBar";

const client = new ApolloClient({
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <div className="container">
          <Route exact path="/" component={Users} />
          <Route path="/users/:userId" component={User} />
          <Route path="/posts/:userId" component={Posts} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
