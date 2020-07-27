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

export class Posts extends Component {
  render() {
    let { userId } = this.props.match.params; // way to access params
    userId = parseInt(userId);
    return (
      <Fragment>
        <p>Test1</p>
        <p>Test2</p>
        <Query query={POSTS_QUERY} variables={{ userId }}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) {
              return <h4>Loading...</h4>;
            }
            if (error) {
              console.log(error);
            }
            return data.userPosts.map((post) => <p>{post.body}</p>);
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Posts;
