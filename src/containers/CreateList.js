// dependencies
import React from 'react'

// components
import { Container, Form, Button } from 'react-bootstrap'

// react
const CreateList = props => (
  <div>
    <Container>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Control placeholder="List Name" />
        </Form.Group>
        <Button variant="primary" type="submit">Create List</Button>
      </Form>
    </Container>
  </div>
)

export default CreateList;