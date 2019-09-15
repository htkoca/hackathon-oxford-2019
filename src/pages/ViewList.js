// dependencies
import React from "react";

// components
import { Container, Card, Button, ListGroup } from "react-bootstrap";
import Item from "../components/Item";

// react
export default class ViewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <h2>
          {this.props.state.projName} > {this.props.state.listName}
        </h2>
        <div>
          {this.props.state.cart.length ? (
            this.props.state.cart.map((product, idx) => (
              <Item
                key={idx}
                product={product}
                setCurrentProduct={this.props.setCurrentProduct}
              />
            ))
          ) : (
            <Card className="mb-2">
              <Card.Body className="center">
                No Products in Your Current List
              </Card.Body>
            </Card>
          )}
        </div>

        <Card  className="mb-4">
  <Card.Header>Post Analysis</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>
      <h6 className="text-muted">Specifications</h6>
    { this.props.state.cart.map((product, idx) => {
              return product.specifications === "" ? 
                <p>{`${product.model_name} does not meet any building code specifications`}</p>
              : ""
            }) }    
    </ListGroup.Item>
    <ListGroup.Item>
      <h6 className="text-muted">Country of Origin</h6>
    { this.props.state.cart.map((product, idx) => {
              return product.manufacturer.country !== "Canada" ? 
                <p><strong>{product.model_name}</strong> is not produced in Canada. Consider ordering from a local supplier.</p>
              : ""
            }) }      
    </ListGroup.Item>

  </ListGroup>
</Card>
        <Button
          className="mr-2"
          variant="primary"
          onClick={this.props.gotoSearch}
        >
          Search for Products
        </Button>
        <Button className="mr-2" variant="secondary" download href="/specs.pdf">
          Create PDF
        </Button>
      </Container>
    );
  }
}
