// dependencies
import React from 'react'
// import { Link } from 'react-router-dom'

// components
import { Navbar, Nav } from 'react-bootstrap'

// react
const Header = () => {
  return (
    <header>
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src="/logo.png"
            width="150"
            alt="Oxford Logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="text-white" href="/">Create Project</Nav.Link>
          <Nav.Link className="text-white" href="/CreateList">Create List</Nav.Link>
          <Nav.Link className="text-white" href="/ViewList">View List</Nav.Link>
          <Nav.Link className="text-white" href="/SearchProducts">Search Products</Nav.Link>
          <Nav.Link className="text-white" href="/ViewProduct">View Product</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header
