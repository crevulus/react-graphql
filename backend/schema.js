const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLScalarType,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const axios = require("axios");

// Object type for returning launch data obj.
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    date_local: { type: GraphQLString },
    details: { type: GraphQLString },
    rocket: { type: GraphQLString },
    success: { type: GraphQLBoolean },
  }),
});

// NB: need to create own object types if nested

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v4/launches")
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
