// dependencies
import React from "react";

// components
import { Container, Form, Button } from "react-bootstrap";

// react
export default class CreateList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.props.setListName(this.refs.listName.value);
    e.preventDefault();
  }
  render() {
    return (
      <Container>
        <h2>{this.props.state.projName} > Create List</h2>
        <Form
          onSubmit={e => {
            this.handleSubmit();
          }}
        >
          <Form.Group>
            <Form.Control
              autoFocus
              placeholder="Material List Name"
              ref="listName"
            />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>
            Create New List
          </Button>
        </Form>
      </Container>
    );
  }
}
