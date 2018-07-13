import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';
import Table from '../../components/Table';

const $ = require('jquery');
$.DataTable = require('datatables.net');


class Recipes extends React.Component {
    state = {
      rows: []
    };
    handleChange = idx => e => {
      const { name, value } = e.target;
      const rows = [...this.state.rows];
      rows[idx] = {
        [name]: value
      };
      this.setState({
        rows
      });
    };
    handleAddRow = () => {
      const item = {
        name: "",
        mobile: ""
      };
      this.setState({
        rows: [...this.state.rows, item]
      });
    };
    handleRemoveRow = () => {
      this.setState({
        rows: this.state.rows.slice(0, -1)
      });
    };
    render() {
      return (
        <div>
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-12 column">
                <table
                  className="table table-bordered table-hover"
                  id="tab_logic"
                >
                  <thead>
                    <tr>
                      <th className="text-center"> # </th>
                      <th className="text-center"> Name </th>
                      <th className="text-center"> Mobile </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rows.map((item, idx) => (
                      <tr id="addr0" key={idx}>
                        <td>{idx}</td>
                        <td>
                          <input
                            type="text"
                            name="name"
                            value={this.state.rows[idx].name}
                            onChange={this.handleChange(idx)}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="mobile"
                            value={this.state.rows[idx].mobile}
                            onChange={this.handleChange(idx)}
                            className="form-control"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  onClick={this.handleAddRow}
                  className="btn btn-default pull-left"
                >
                  Add Row
                </button>
                <button
                  onClick={this.handleRemoveRow}
                  className="pull-right btn btn-default"
                >
                  Delete Row
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
export default Recipes;