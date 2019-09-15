// dependencies
import React from "react";

// components
import { Container, Card, Button, Nav, Row, Col } from "react-bootstrap";

// react
export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    function hasDatasheet() {
      if (this.props.currentProduct.datasheet_url != null) {
        return true;
      } else {
        return false;
      }
    }

    return (
      <Container>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/1920x1080" />
          <Card.Body>
            <Card.Title>
              <h1>{this.props.currentProduct.model_name}</h1>
            </Card.Title>
            <hr />
            <Row>
              <Col className="border-right" xs={3}>
                <Nav defaultActiveKey="notes" className="flex-column">
                  <Nav.Link event-key="notes">Material Notes</Nav.Link>
                  {this.props.currentProduct.datasheet_url && (
                    <Nav.Link
                      target="_blank"
                      href={
                        "https://oxfordhackapi2019.herokuapp.com/" +
                        this.props.currentProduct.datasheet_url
                      }
                    >
                      Datasheet
                    </Nav.Link>
                  )}
                  <Nav.Link event-key="stock">Stock Level</Nav.Link>
                  <Nav.Link event-key="ratings">Ratings</Nav.Link>
                  <Nav.Link event-key="history">Price History</Nav.Link>
                  <Nav.Link event-key="parameters">Parameters</Nav.Link>
                  <Nav.Link event-key="catalog">Catalog</Nav.Link>
                </Nav>
                <p>Price Calculator Goes Here</p>
              </Col>
              <Col xs={9}>
                {/*  */}
                <h2>Material Notes</h2>
                <Card className="mb-3">
                  <Card.Header>
                    Project Manager: Tony Ko / T4 Tower Building
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="small">
                        {" "}
                        I wouldn't recommend this product, slow shipping times
                        and there are other alternatives.{" "}
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>
                <Card className="mb-3">
                  <Card.Header>
                    Project Manager: Tony Ko / Office Building
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="small">
                        {" "}
                        Be mindful about whether these meet the codes necessary{" "}
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>
                <Card className="mb-3">
                  <Card.Header>Comment from a manager</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="small">
                        {" "}
                        Anyone care to come up with something here?{" "}
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>
                {/*  */}
                <h2>Stock Levels</h2>
                This product is currently{" "}
                <span
                  className={
                    this.props.currentProduct.availability == "0" ||
                    !this.props.currentProduct.availability
                      ? "red-circle"
                      : "circle"
                  }
                />{" "}
                <strong>
                  {this.props.currentProduct.availability == "1"
                    ? "Available"
                    : "Unavailable"}
                </strong>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {this.props.currentProduct.vendor.name}
                    </Card.Title>
                    <Card.Text>
                      <p>{this.props.currentProduct.vendor.address}</p>
                      <p>
                        {this.props.currentProduct.vendor.address_2},{" "}
                        {this.props.currentProduct.vendor.city_state},{" "}
                        {this.props.currentProduct.vendor.postal_code}
                      </p>
                      <p>{this.props.currentProduct.vendor.country} 🍁</p>
                      Stock Level: {this.props.currentProduct.quote}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <h2>Information Goes Here</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
