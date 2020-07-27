import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import UserItem from "./UserItem";

// gql parses query strings into GraphQL-readable format
const USERS_QUERY = gql`
  query UsersQuery {
    users {
      id
      name
      email
      phone
      website
    }
  }
`;

export class Users extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Users</h1>
        <Query query={USERS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return <h4>Loading...</h4>;
            }
            if (error) {
              console.log(error);
            }
            return (
              <Fragment>
                {data.users.map((user) => (
                  <UserItem key={user.name} user={user} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Users;
