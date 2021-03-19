import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
function User() {
  // const user = [
  //   { name: "Ashu", Age: 23 },
  //   { name: "Sam", Age: 23 },
  //   { name: "Abhi", Age: 23 },
  //   { name: "Anshu", Age: 23 },
  // ];
  const [user, setUser] = useState([]); ////// for API Example
  useEffect(() => {
    fetch("http://dummy.restapiexample.com/api/v1/employees").then((data) => {
      data.json().then((result) => {
        console.warn("result", result);
        setUser(result.data);
      });
    });
  }, []);
  return (
    <div>
      <h1>User list is Below</h1>
      {/* {user.map((item, i) => (
        <div key={i}>{item.name}</div>
      ))} */}
      {/* <Button variant="outline-primary">Primary</Button>{" "}
      <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-success">Success</Button>{" "}
      <Button variant="outline-warning">Warning</Button>{" "}
      <Button variant="outline-danger">Danger</Button>{" "}
      <Button variant="outline-info">Info</Button>{" "}
      <Button variant="outline-light">Light</Button>{" "}
      <Button variant="outline-dark">Dark</Button> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th> Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.employee_name}</td>
              <td>{item.employee_salary}</td>
              <td>{item.employee_age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default User;
