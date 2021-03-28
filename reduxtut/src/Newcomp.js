// import { connect } from "react-redux";
import React, { Component } from "react";

class Newcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello from react redux app!!",
    };
  }
  ButtonChange = () => {
    this.setState({
      message: "Hello",
    });
  };
  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>click here</button>
      </div>
    );
  }
}
export default Newcomp;
