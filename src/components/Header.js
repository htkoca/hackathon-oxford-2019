// dependencies
import React from 'react'
// import { Link } from 'react-router-dom'

// components
import { Navbar, Nav } from 'react-bootstrap'

// react
const Header = () => {
  return (
    <header>
      <Navbar bg="light">
        <Navbar.Brand href="#home">Oxford</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Create Project</Nav.Link>
          <Nav.Link href="/CreateList">Create List</Nav.Link>
          <Nav.Link href="/ViewList">View List</Nav.Link>
          <Nav.Link href="/SearchProducts">Search Products</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header
