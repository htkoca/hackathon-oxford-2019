// dependencies
import React from "react";

// components
import { Container, Card, Button, Nav, Row, Col, Form } from "react-bootstrap";
import Chart from "react-apexcharts";

// react
export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      currentTab: "tab_materialNotes",
      options: {
        chart: {
          id: "line"
        },
        xaxis: {
          categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
      },
      series: [
        {
          name: "Price Change",
          data: [...Array(12)].map(e=>~~(Math.random()*this.props.currentProduct.quote+5).toFixed(2))
        }
      ]
    };   

  }

  handleClick(event) {
    console.log('clicked');
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
          <Card.Body>
            <Card.Title>
              <h1>{this.props.currentProduct.model_name}</h1>
            </Card.Title>
            <hr />
            <Row>
            <div
                style={{
                  backgroundSize: "cover",
                  backgroundImage:
                    "url('https://oxfordhackapi2019.herokuapp.com/" +
                    this.props.currentProduct.image_url +
                    "')",
                  width: "150px",
                  height: "150px"
                }}
              />
              <Col className="border-right" xs={3}>
                <Nav defaultActiveKey="notes" className="flex-column">
                  <Nav.Link onClick={this.handleClick} event-key="notes">Material Notes</Nav.Link>
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
                  <Nav.Link onClick={this.handleClick} event-key="stock">Stock Level</Nav.Link>
                  <Nav.Link onClick={this.handleClick} event-key="history">Price History</Nav.Link>
                  <Nav.Link onClick={this.handleClick} event-key="specifications">Specifications</Nav.Link>
                </Nav>
                <p>Price Calculator Goes Here</p>
              </Col>
              <Col xs={9}>
              <div ref="tab_materialNotes">
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

<Form>

              <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Material Notes</Form.Label>
              <Form.Control as="textarea" rows="3" />
              </Form.Group>

              <Button variant="primary" type="submit">
    Add Material Notes
  </Button>
  </Form>

                </div>
                <div ref="tab_stockLevels">
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
                      Stock Level: {this.props.currentProduct.stock_level}
                    </Card.Text>
                  </Card.Body>
                </Card>
                </div>
                <div ref="tab_priceHistory">
                <h2>Price History</h2>
                <Chart
    options={this.state.options}
    series={this.state.series}
    type="line"
    width="500"
  />
  </div>
  <div ref="tab_specifications">
  <h2>Specifications</h2>
  <ul>
  { this.props.currentProduct.specifications.map((spec) => <li>{spec}</li> ) }
  </ul>
  </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
