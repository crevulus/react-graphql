import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";

const USER_QUERY = gql`
  query UserQuery($userId: Int!) {
    user(id: $userId) {
      id
      name
      email
      phone
      website
      company {
        name
      }
      address {
        street
        suite
        city
      }
    }
  }
`;

export class User extends Component {
  render() {
    let { userId } = this.props.match.params; // way to access params
    userId = parseInt(userId);
    return (
      <Fragment>
        {/* need to add variables when passing arguments to gql */}
        <Query query={USER_QUERY} variables={{ userId }}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) {
              return <h4>Loading...</h4>;
            }
            if (error) {
              console.log(error);
            }
            const {
              id,
              name,
              email,
              website,
              phone,
              address: { street, suite, city },
            } = data.user;
            const company_name = data.user.company.name;
            return (
              <div>
                <h1 className="display-4 my-3">
                  <span className="text-info">User: </span>
                  {name}
                </h1>
                <h4 className="mb-3">Company Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">Name: {company_name}</li>
                  <li className="list-group-item">Website: {website}</li>
                  {/* <li className="list-group-item">
                    Successful:{" "}
                    <span
                      className={classNames({
                        "text-success": launch_success,
                        "text-danger": !launch_success,
                      })}
                    >
                      {launch_success ? "Yes" : "No"}
                    </span>
                  </li> */}
                </ul>
                <h4 className="my-3">Contact Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">Phone: {phone}</li>
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">
                    Address:
                    <ul>
                      <li className="list-group-item">{suite}</li>
                      <li className="list-group-item">{street}</li>
                      <li className="list-group-item">{city}</li>
                    </ul>
                  </li>
                </ul>
                <hr />
                <Link to="/" className="btn btn-danger">
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

export default User;
