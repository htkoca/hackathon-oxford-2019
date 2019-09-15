// dependencies
import React from "react";

// components
import { Container, Form, Button } from "react-bootstrap";

// react
export default class CreateList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav(event) {
    this.props.setPage(event.target.getAttribute("data-key") || event.currentTarget.getAttribute("data-key"));
  }
  handleSubmit(e) {
    this.props.setListName(this.refs.listName.value);
    e.preventDefault();
  }
  render() {
    return (
      <Container>
        <h2>{this.props.state.projName} > Create List</h2>
        <Form onSubmit={this.handleSubmit }>
          <Form.Group>
            <Form.Control
              autoFocus
              placeholder="Material List Name"
              ref="listName"
            />
          </Form.Group>
          <Button className="mr-2" variant="primary" onClick={this.handleSubmit}>
            Create New List
          </Button>
          <Button variant="secondary" onClick={this.handleNav} data-key="CreateProject">
            Back
          </Button>
        </Form>
      </Container>
    );
  }
}
