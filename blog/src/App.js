import React, { useState } from "react";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import Home from "./Home";
import CreateUser from "./CreateUser";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
function App() {
  const [name, setName] = useState("Ashu");
  const [name3, setName3] = useState("Facebook");
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              {" "}
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#features">
              {" "}
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {" "}
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {" "}
              <Link to="/list">User List</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {" "}
              <Link to="/create">Create User</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/about" children={<About />} />
        </Switch>
        <Switch>
          <Route path="/create" children={<CreateUser />} />
        </Switch>
        <Switch>
          <Route path="/list" children={<User />} />
        </Switch>
        <Switch>
          <Route path="/contact" children={<Contact />} />
        </Switch>
        <Route path="/">
          <Home />
        </Route>
      </Router>
      {/* <h1> hello from react </h1>
      <About name={name} />
      <button
        onClick={() => {
          setName("Ashutosh Upadhyay");
        }}
      >
        {" "}
        Update name via prop
      </button>
      <Contact name={name3} />
      <button
        onClick={() => {
          setName3("Snapchat");
        }}
      >
        {" "}
        Update Medianame via prop
      </button>
      <User /> */}
      {/* <Contact /> */}
      {/* <CreateUser /> */}
    </div>
  );
}

export default App;
