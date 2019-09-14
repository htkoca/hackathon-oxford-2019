// dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// components
import { Navbar, Nav } from 'react-bootstrap'

// react
const Footer = () => {
  return (
    <footer>
      <Navbar bg="light">
        <Navbar.Brand href="#home">Debug Footer</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Create Project</Nav.Link>
        </Nav>
      </Navbar>
    </footer>
  )
}

export default Footer
