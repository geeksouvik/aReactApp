import React, { Component } from "react";

// We wanna convert this to a stateless functional component

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light ">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {" "}
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;

/*
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light ">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {" "}
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;

*/
