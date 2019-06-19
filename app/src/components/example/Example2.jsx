import PropTypes from "prop-types";
import React from "react";
import "./Example.css";

function Loading() {
  return (
    <div className="loading">
      <div className="loading-icon" />
      <div>Loading</div>
    </div>
  );
}

function Empty() {
  return <div className="empty">You have no Items</div>;
}

function Example2({ data }) {
  return (
    <ul className="example owl">
      {(data.length === 0 && <Empty />) ||
        data.map(({ name }, index) => <li key={index}>{name}</li>)}
    </ul>
  );
}

Example2.propTypes = {
  data: PropTypes.array.isRequired
};

export default Example2;
