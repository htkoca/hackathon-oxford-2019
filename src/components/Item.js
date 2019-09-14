// dependencies
import React from 'react'

// components
import { Card, Row, Col, Button } from 'react-bootstrap'

// react
const Item = (props) => {
  return (
    <Card className="my-2">
      <Card.Body>
        <Row>
          <Col xs={9}>
            <img className="img-fluid float-left mr-4" src="https://via.placeholder.com/80" alt="product thumbnail"/>
            <Card.Title className="my-2">Product Title</Card.Title>
          </Col>
          { props.showButtons &&
            <Col xs={3}>
              <Button variant="secondary" block>Features</Button>
              <Button variant="secondary" block>Add Product</Button>
            </Col>
          }
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Item
