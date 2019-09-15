// dependencies
import React from "react";

// components
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Item from "../components/Item";

// react
export default class SearchProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav(event) {
    this.props.setPage(event.target.getAttribute("data-key") || event.currentTarget.getAttribute("data-key"));
  }
  handleSubmit(e) {
    this.props.filterSearch(`${this.refs.searchBox.value} ${this.state.checked}`);
    e.preventDefault();
  }
  componentDidMount() {
    this.props.filterSearch('');
  }
  handleChecked(e){
    let rslt = this.state.checked.split(" ");
    rslt.push(e.target.name)
    rslt = rslt.filter((name) => e.target.name === name ? e.target.checked : true)
    this.setState({ checked: rslt.join(" ") }, () => {
      this.handleSubmit(e);
    })
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Row className="mb-4">
            <Col xs={3}>
              <Button variant="primary" className="mb-2" block onClick={this.handleNav} data-key="ViewList">
                ← Back to List
              </Button>
            </Col>
            <Col xs={9}>
              <Form.Control
                autoFocus
                placeholder="Search for Product by name or category"
                ref="searchBox"
                onChange={this.handleSubmit}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <div className="mb-4">
                <h4>Stock Legend</h4>
                <span className="circle" /> Available&nbsp;&nbsp;
                <span className="ml-3 mr-1 red-circle" /> Not Available
              </div>
              <div>
                <h4>Categories:</h4>
                <Form.Group>
                  { this.props.state.categories.map((cat, idx) => <Form.Check type='checkbox' name={cat} label={cat} onChange={this.handleChecked} /> ) }
                </Form.Group>
              </div>
            </Col>
            <Col xs={9}>
              {this.props.state.filtered.map((product, idx) => (
                <Item
                  key={idx}
                  product={product}
                  showAdd="true"
                  addToCart={this.props.addToCart}
                  setCurrentProduct={this.props.setCurrentProduct}
                />
              ))}
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
