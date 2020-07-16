const GraphQLObjectType = require("graphql");

// Object type for returning launch data obj.
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({}),
});
