import React from "react";

export default function LaunchItem(props) {
  console.log(props);
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Misson: {props.launch.mission_name}</h4>
          <p>Date: {props.launch.launch_date_local}</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Details</button>
        </div>
      </div>
    </div>
  );
}
