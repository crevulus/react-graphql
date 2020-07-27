import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function UserItem(props) {
  console.log(props);
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Name:{" "}
            <span
            // className={classNames({
            //   "text-success": props.launch.launch_success,
            //   "text-danger": !props.launch.launch_success,
            // })}
            >
              {props.user.name}
            </span>
          </h4>
          <p>{props.user.email}</p>
          <p>{props.user.phone}</p>
          <p>{props.user.website}</p>
        </div>
        <div className="col-md-3">
          <Link className="btn btn-primary" to={`/user/${props.user.id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
