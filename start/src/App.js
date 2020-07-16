import React from "react";
import Launches from "./components/Launches";

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
      <div className="container">
        <img src={logo} alt="SpaceX" style={{ width: 300 }} />
        <h1>Spaceman says everybody get down</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
