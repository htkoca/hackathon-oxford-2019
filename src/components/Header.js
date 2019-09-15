// dependencies
import React from "react";

// components
import { Navbar } from "react-bootstrap";

// react
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav(event) {
    this.props.setPage(event.target.getAttribute("data-key") || event.currentTarget.getAttribute("data-key"));
  }
  render() {
    return (
      <Navbar bg="dark">
        <Navbar.Brand onClick={this.handleNav} data-key="CreateProject">
          <img src="/logo.png" width="150" alt="Oxford Logo" />
        </Navbar.Brand>
        <Navbar.Brand className="ml-auto">
          <img src="/logo-app.png" width="40" height="40" alt="Oxford Logo" />
        </Navbar.Brand>
      </Navbar>
    );
  }
}
