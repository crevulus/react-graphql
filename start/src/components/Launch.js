import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";

const USER_QUERY = gql`
  query UserQuery($id: Int!) {
    launch(id: $id) {
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

export class Launch extends Component {
  render() {
    let { id } = this.props.match.params; // way to access params
    id = parseInt(id);
    return (
      <Fragment>
        {/* need to add variables when passing arguments to gql */}
        <Query query={USER_QUERY} variables={{ id }}>
          {({ loading, error, data }) => {
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
              company: { company_name },
              address: { street, suite, city },
            } = data.user;
            return (
              <div>
                <h1 className="display-4 my-3">
                  <span className="text-info">Mission: </span>
                  {company_name}
                </h1>
                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">User ID: {id}</li>
                  <li className="list-group-item">Name: {name}</li>
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
                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">Rocket ID: {suite}</li>
                  <li className="list-group-item">Rocket Name: {street}</li>
                  <li className="list-group-item">Rocket Type: {city}</li>
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

export default Launch;
