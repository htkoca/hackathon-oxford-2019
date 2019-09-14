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
      <Button variant="primary">Add Item</Button>
    </Container>
  </div>
)

export default ViewList;