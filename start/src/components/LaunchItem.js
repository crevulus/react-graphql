import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Moment from "react-moment";

export default function LaunchItem(props) {
  console.log(props);
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Misson:{" "}
            <span
            // className={classNames({
            //   "text-success": props.launch.launch_success,
            //   "text-danger": !props.launch.launch_success,
            // })}
            >
              {props.user.name}
            </span>
          </h4>
          {/* <p>
            Date:{" "}
            <Moment format="YYYY-MM-DD HH:MM">
              {props.launch.launch_date_local}
            </Moment>
          </p> */}
        </div>
        <div className="col-md-3">
          <Link
            className="btn btn-primary"
            to={`/posts?userId=${props.user.id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
