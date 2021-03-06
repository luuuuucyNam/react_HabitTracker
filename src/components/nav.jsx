import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.total}</span>
      </div>
    );
  }
}

export default NavBar;
