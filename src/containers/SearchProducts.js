// dependencies
import React from 'react'

// components
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import Item from '../components/Item'

// react
const SearchProducts = props => (
  <div>
    <Container>
      <Form>
        <Row>
          <Col xs={9}>
            <Form.Control placeholder="Search Product" />
          </Col>
          <Col xs={3}>
            <Button variant="primary" block>Search Page</Button>
          </Col>
        </Row>
      </Form>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </Container>
  </div>
)

export default SearchProducts;