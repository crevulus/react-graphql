const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const MyGraphQLSchema = require("./schema.js");
const path = require("path");

const app = express();

app.use(cors()); // need cors because you can't call between local hosts(?)

const PORT = process.env.PORT || 5000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("start/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "start", "build", "index.html"));
  });
}

app.listen(PORT, (req, res) => {
  console.log(`server listening on port: ${PORT}`);
});
