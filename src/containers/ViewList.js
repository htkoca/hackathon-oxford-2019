// dependencies
import React from 'react'

// components
import { Container, Button } from 'react-bootstrap'
import Item from '../components/Item'

// react
const ViewList = props => (
  <div>
    <Container>
      <Item></Item>
      <Button className="mr-2" variant="primary">Add Item</Button>
      <Button className="mr-2" variant="secondary">Post Analysis</Button>
      <Button className="mr-2" variant="secondary">Create PDF</Button>
    </Container>
  </div>
)

export default ViewList;