// dependencies
import React from "react";

// components
import { Card, Row, Col, Button, FormControl } from "react-bootstrap";

// react
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleFeatures = this.handleFeatures.bind(this);
    this.handleQty = this.handleQty.bind(this);
  }
  handleAdd() {
    this.props.addToCart(this.props.product, this.state.qty);
  }
  handleFeatures() {
    this.props.setCurrentProduct(this.props.product);
  }
  handleQty(event){
    this.setState({ qty: event.target.value })
  }
  render() {
    return (
      <Card className="my-2">
        <Card.Body>
          <Row>
            <Col xs={6}>
              <div
                className="float-left mr-4"
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url('https://oxfordhackapi2019.herokuapp.com/${this.props.product.image_url}')`,
                  width: "100px",
                  height: "100px"
                }}
              />
              <Card.Title className="my-2">
                <span className="mr-2">{this.props.product.model_name}</span>
                <span
                  className={
                    this.props.product.availability === "0" ||
                    !this.props.product.availability
                      ? "red-circle"
                      : "circle"
                  }
                />
              </Card.Title>
              <p className="small mb-1">{this.props.product.colour_finish}</p>
              <p className="small mb-0">{this.props.product.manufacturer}</p>
            </Col>
            <Col xs={3}>
              <p className="pt-2 mt-1"> ${this.props.product.quote}</p>
              { this.props.product.qty && !this.props.showAdd ? 
                <div>QTY: {this.props.product.qty}</div>
              : <FormControl ref="qty"
                type="number"
                size="small"
                className="w-75"
                placeholder="Qty"
                aria-label="Quantity"
                onChange={this.handleQty}
              /> } 
            </Col>
            <Col xs={3}>
              <Button variant="secondary" block onClick={this.handleFeatures}>
                Product Info
              </Button>
              {this.props.showAdd && this.props.product.availability === "1" && (
                <Button variant="secondary" block onClick={this.handleAdd}>
                  Add Product
                </Button>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Item;
