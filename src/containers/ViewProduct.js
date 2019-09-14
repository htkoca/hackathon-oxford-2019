// dependencies
import React from 'react'

// components
import { Container, Card, Row, Col, Button } from 'react-bootstrap'

// react
const ViewProduct = props => (
  <div>
    <Container>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/1920x1080" />
        <Card.Body>
          <Card.Title><h1>Product Title</h1></Card.Title>
          <hr/>
          <Row>
            <Col className="border-right" xs={3}>
              <Button variant="link">Material Notes</Button>
              <Button variant="link">Datasheet</Button>
              <Button variant="link">Stock Level</Button>
              <Button variant="link">Ratings</Button>
              <Button variant="link">Price History</Button>
              <Button variant="link">Parameters</Button>
              <Button variant="link">Catalog</Button>
              <p>Price Calculator Goes Here</p>
            </Col>
            <Col xs={9}>
              <h2>Information Goes Here</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  </div>
)

export default ViewProduct;