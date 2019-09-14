// dependencies
import React from 'react'

// components
import { Card, Row, Col } from 'react-bootstrap'

// react
const Item = () => {
  return (
    <Card className="my-2">
      <Card.Body>
        <img className="img-fluid float-left mr-4" src="https://via.placeholder.com/50"/>
        <Card.Title className="my-2">Product Title</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Item
