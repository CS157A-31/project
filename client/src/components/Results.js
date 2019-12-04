import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";

const Results = props => {
  return (
    <div className="container">
      <MUIDataTable
        title={"Results"}
        data={props.data}
        columns={props.columns}
      />
    </div>
  );
};

export default Results;
