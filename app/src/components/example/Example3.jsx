import PropTypes from "prop-types";
import React from "react";
import DaList from "./Example1";
import "./Example.css";

function Loading() {
  return (
    <div className="loading">
      <div className="loading-icon" />
      <div>Loading</div>
    </div>
  );
}

function Erroneous({ response }) {
  return (
    <div className="error">
      <div style={{ fontSize: 20, fontWeight: 900 }}>{response.status}</div>
      <div style={{ fontSize: 12 }}>{response.data}</div>
    </div>
  );
}

function ResponseData({ error, loading, render, response }) {
  if (!response) {
    return loading();
  }

  const { status } = response;

  if (status === "ERROR") {
    return error({ response });
  }

  return render({ response });
}

function Example3({ data1, data2, data3 }) {
  return (
    <div className="example owl">
      <div className="red">
        <ResponseData
          response={data1}
          loading={() => <Loading />}
          error={({ response }) => <Erroneous response={response} />}
          render={({ response }) => <DaList data={response.data} />}
        />
      </div>
      <div className="green">
        <ResponseData
          response={data2}
          loading={() => <Loading />}
          error={({ response }) => <Erroneous response={response} />}
          render={({ response }) => <DaList data={response.data} />}
        />
      </div>
      <div className="blue">
        <ResponseData
          response={data3}
          loading={() => <Loading />}
          error={({ response }) => <Erroneous response={response} />}
          render={({ response }) => <DaList data={response.data} />}
        />
      </div>
    </div>
  );
}

Example3.propTypes = {
  data1: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.array
  }),
  data2: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.array
  }),
  data3: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.array
  })
};

export default Example3;
