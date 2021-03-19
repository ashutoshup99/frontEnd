import React from "react";
// This is Class Component
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      /// state is like an object which store value and it will see that if the change in virtual dom is relevant to update in real dom
      name: "Ashu",
      age: 23,
      position: "CEO",
    };
    console.warn("first call of construcutor");
  }
  componentDidMount() {
    console.warn("props", this.props.name);
  }
  componentDidUpdate() {
    console.warn("props in update", this.props.name);
    // alert("Name is Upadted");
  }
  render() {
    return (
      <div>
        <h2>About us</h2>
        {/* <h3>{this.props.name}</h3> */}
        <h3>Name {this.state.name}</h3>
        <h3>Position {this.state.position}</h3>
        <h3>Age is {this.state.age}</h3>
        <button
          onClick={() => {
            this.setState({ name: "Ashutosh Upadhyay" });
          }}
        >
          Update Name
        </button>
        <button
          onClick={() => {
            this.setState({ age: 24 });
          }}
        >
          Update Age
        </button>
      </div>
    );
  }
}
export default About;
