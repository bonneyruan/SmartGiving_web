import React, { Component } from "react";
import PropTypes from "prop-types";

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

import "../style/Components.css";

class RequestTable extends Component {
  render() {
    const data = this.props.data;
    const keys = this.props.keys ? this.props.keys : Object.keys(data[0]);
    const titles = this.props.titles ? this.props.titles : Object.keys(data[0]); // We're being naughty and assuming the first item as keys
    return (
      <div className="request-table-container">
        <Table>
          <TableHead>
            <TableRow>
              {titles.map((t, i) => {
                return (
                  <TableCell className="table-title-cell" key={i}>
                    {t}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d, i) => {
              return (
                <TableRow key={i}>
                  {keys.map((k, j) => {
                    return (
                      <TableCell className="table-value-cell" key={j}>
                        {d[k]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

RequestTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default RequestTable;
