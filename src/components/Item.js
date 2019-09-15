// dependencies
import React from "react";

// components
import { Card, Row, Col, Button } from "react-bootstrap";

// react
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleFeatures = this.handleFeatures.bind(this);
  }
  handleAdd() {
    this.props.addToCart(this.props.product);
  }
  handleFeatures() {
    this.props.setCurrentProduct(this.props.product);
  }
  render() {
    return (
      <Card className="my-2">
        <Card.Body>
          <Row>
            <Col xs={6}>
              <div
                className="img-fluid float-left mr-4"
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
                    this.props.product.availability == "0" ||
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
              <p classname="my-4"> {`$${this.props.product.quote}`} </p>
            </Col>
            <Col xs={3}>
              <Button variant="secondary" block onClick={this.handleFeatures}>
                Product Info
              </Button>
              {this.props.showAdd && this.props.product.availability == "1" && (
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
