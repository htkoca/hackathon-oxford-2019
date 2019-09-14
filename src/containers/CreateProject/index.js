// dependencies
import React from 'react'

// components
import { Container, Form, Button } from 'react-bootstrap'

// react
const CreateProject = props => (
  <div>
    <Container>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Control placeholder="Project Name" />
        </Form.Group>
        <Button variant="primary" type="submit">Create Project</Button>
      </Form>
    </Container>
  </div>
)

export default CreateProject;