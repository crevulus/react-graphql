const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const axios = require("axios");

// Object type for returning user data obj.
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    website: { type: GraphQLString },
    address: { type: AddressType },
    company: { type: CompanyType },
  }),
});

// Need to create own object types if nested
const AddressType = new GraphQLObjectType({
  name: "Address",
  fields: () => ({
    street: { type: GraphQLString },
    suite: { type: GraphQLString },
    city: { type: GraphQLString },
    geo: { type: GeoType },
  }),
});

const GeoType = new GraphQLObjectType({
  name: "Geo",
  fields: () => ({
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
  }),
});

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    name: { type: GraphQLString },
  }),
});

const PostsType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    userId: { type: GraphQLInt },
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

// Query for latest version of API
// const LaunchTypeV4 = new GraphQLObjectType({
//   name: "LaunchV4",
//   fields: () => ({
//     flight_number: { type: GraphQLInt },
//     name: { type: GraphQLString },
//     launch_year: { type: GraphQLString },
//     date_local: { type: GraphQLString },
//     details: { type: GraphQLString },
//     rocket: { type: GraphQLString },
//     success: { type: GraphQLBoolean },
//   }),
// });

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.data);
      },
    },
    // get specific user
    user: {
      type: UserType, // single user, so don't need list
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://jsonplaceholder.typicode.com/users/${args.id}`)
          .then((res) => res.data);
      },
    },
    posts: {
      type: new GraphQLList(PostsType),
      resolve(parent, args) {
        return axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.data);
      },
    },
    // get specific user's posts
    post: {
      type: new GraphQLList(PostsType), // single post so don't need list
      args: {
        userId: { type: GraphQLInt },
      },

      resolve(parent, args) {
        return axios
          .get(
            `https://jsonplaceholder.typicode.com/posts?userId=${args.userId}`
          )
          .then((res) => res.data);
      },
    },
    // launchesV4: {
    //   type: new GraphQLList(LaunchTypeV4),
    //   resolve(parent, args) {
    //     return axios
    //       .get("https://api.spacexdata.com/v4/launches")
    //       .then((res) => res.data);
    //   },
    // },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
