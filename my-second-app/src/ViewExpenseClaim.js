import React, { Component } from "react";

export default class ViewExpenseClaim extends Component {
  constructor() {
    super();
    this.state = { ec: [] };
  }
  componentDidMount() {
    console.log("Initialization...");

    fetch("http://localhost:8083/api/v1/expenseClaims")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ ec: data });
      });
  }
  // deleteEmployee(id){
  //     console.log('Deleting employee ...' , id)
  //     const url = 'http://localhost:8080/api/employees/' + id
  //     fetch(url, {
  //         method: "DELETE"
  //     })
  //     .then(response => response.json())
  //     .then(
  //             data => {
  //                 console.log(data)
  //                 this.setState({employees:data.employees, message: data.text})

  //             }
  //         );
  // }
  render() {
    var ClaimsList = this.state.ec.map((item, i) => {
      return (
        <tr key={i}>
          <th scope="row">{i + 1}</th>
          <td>{item.expenseCodeId}</td>
          <td>{item.expenseAmount}</td>
          <td>{item.startDate}</td>
          <td>{item.endDate}</td>
          <td>{item.status}</td>
          <td>{item.expense}</td>
          <td>{item.project}</td>
          {/* <td><button type="button" className="btn btn-danger" onClick={this.deleteEmployee.bind(this, employee.id)}> X </button></td> */}
        </tr>
      );
    });

    return (
      <div>
        {/* <div className="alert alert-success" role="alert">
                    {this.state.message}
                </div> */}

        <table className="table">
          <thead>
            <tr>
              <th scope="col">expenseCodeId</th>
              <th scope="col">expenseAmount</th>
              <th scope="col">startDate</th>
              <th scope="col">endDate</th>
              <th scope="col">status</th>
              <th scope="col">expense</th>
              <th scope="col">project</th>
            </tr>
          </thead>
          <tbody>{ClaimsList}</tbody>
        </table>
      </div>
    );
  }
}
