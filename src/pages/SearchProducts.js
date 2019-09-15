// dependencies
import React from "react";

// components
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Item from "../components/Item";

// react
export default class SearchProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.filterSearch(event.target.value);
  }
  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col xs={9}>
              <Form.Control
                placeholder="Search for Product by name or category"
                onChange={this.handleChange}
              />
            </Col>
            <Col xs={3}>
              <Button variant="primary" block onClick={this.handleChange}>
                Search Page
              </Button>
            </Col>
          </Row>
        </Form>
        {this.props.state.filtered.map((product, idx) => (
          <Item
            key={idx}
            product={product}
            showAdd="true"
            addToCart={this.props.addToCart}
            setCurrentProduct={this.props.setCurrentProduct}
          />
        ))}
        <Col xs={9}>
          <div className="mt-4">
            <h4>Stock Legend</h4>
            <span className="circle" /> Available&nbsp;&nbsp;
            <span className="ml-3 mr-1 red-circle" /> Not Available
          </div>
        </Col>
      </Container>
    );
  }
}
