import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

const POSTS_QUERY = gql`
  query PostsQuery($userId: Int!) {
    userPosts(userId: $userId) {
      id
      userId
      title
      body
    }
  }
`;

const USERS_QUERY = gql`
  query UserQuery($userId: Int!) {
    user(id: $userId) {
      id
      name
    }
  }
`;

export class Posts extends Component {
  render() {
    let { userId } = this.props.match.params; // way to access params
    userId = parseInt(userId);
    return (
      <Fragment>
        <Query query={USERS_QUERY} variables={{ userId }}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) {
              return <h4>Loading...</h4>;
            }
            if (error) {
              console.log(error);
            }
            return (
              <h1 className="display-4 my-3 text-primary">
                <span className="text-info">User: </span>
                {data.user.name}
              </h1>
            );
          }}
        </Query>
        <h3>Post History</h3>
        <Query query={POSTS_QUERY} variables={{ userId }}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) {
              return <h4>Loading...</h4>;
            }
            if (error) {
              console.log(error);
            }
            return (
              <div>
                {data.userPosts.map((post) => (
                  <div className="card bg-dark mb-3">
                    <div className="card-body">
                      <h4 className="card-title">{post.title}</h4>
                      <p className="card-text">{post.body}</p>
                    </div>
                  </div>
                ))}
                <Link to={`/users/${userId}`} className="btn btn-danger">
                  Back
                </Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Posts;
