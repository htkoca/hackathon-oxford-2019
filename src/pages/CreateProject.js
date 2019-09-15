// dependencies
import React from "react";

// components
import { Container, Form, Button } from "react-bootstrap";

// react
export default class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.props.setProjName(this.refs.projName.value);
    e.preventDefault();
  }
  render() {
    return (
      <Container>
        <h2>Create New Project</h2>
        <Form onSubmit={this.handleSubmit }>
          <Form.Group>
            <Form.Control autoFocus placeholder="Project Name" ref="projName" />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>
            Create Project
          </Button>
        </Form>
      </Container>
    );
  }
}
