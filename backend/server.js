const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const MyGraphQLSchema = require("./schema.js");

const app = express();

app.use(cors()); // need cors because you can't call between local hosts(?)

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
