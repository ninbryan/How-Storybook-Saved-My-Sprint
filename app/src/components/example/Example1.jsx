import PropTypes from "prop-types";
import React from "react";
import './Example.css';

function DaList({ data }) {
  return (
    <ul className="example owl">
      {data.length &&
        data.map(({ name }, index) => <li key={index}>{name}</li>)}
    </ul>
  );
}

DaList.propTypes = {
  data: PropTypes.array.isRequired
};

export default DaList;
