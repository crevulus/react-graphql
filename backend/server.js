const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const MyGraphQLSchema = require("./schema.js");
const path = require("path");

const app = express();

app.use(cors()); // need cors because you can't call between local hosts(?)

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  })
);

app.use(express.static("start/public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "start/public", "index.html")); // redirect to react's index.html if any other endpoint is requested
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
