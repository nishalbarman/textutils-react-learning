import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div className="container my-3">
        <div className={`alert alert-${props.alert.type}`} role="alert">
          {props.alert.msg}
        </div>
      </div>
    )
  );
}
