// dependencies
import React from "react";

// components
import { Container, Card, Button, Nav, Row, Col, Form, InputGroup, FormControl } from "react-bootstrap";
import Chart from "react-apexcharts";

// react
export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCalculation: '$0.00',
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
    this.handleTab = this.handleTab.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }
  handleTab(event) {
    console.log(event.currentTarget)
  }
  handleCalculate(event) {
    this.setState ({ totalCalculation: '$' + (event.target.value * this.props.currentProduct.quote).toFixed(2) })
  }
  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              <h1>{this.props.currentProduct.model_name}</h1>
            </Card.Title>
            <hr />
            <Row>
              <Col className="border-right" xs={2}>
                <div
                  style={{
                    backgroundSize: "contain",
                    backgroundImage: `url('https://oxfordhackapi2019.herokuapp.com/${this.props.currentProduct.image_url}')`,
                    width: "100%",
                    height: "150px"
                  }}
                />
                <hr/>
                <Nav defaultActiveKey="notes" className="flex-column">
                  <Button className="px-0 text-left" variant="link" onClick={this.handleTab} data-key="tabMaterialNotes">Material Notes</Button>
                  <Button className="px-0 text-left" variant="link" onClick={this.handleTab} data-key="tabStockLevels">Stock Level</Button>
                  <Button className="px-0 text-left" variant="link" onClick={this.handleTab} data-key="tabPriceHistory">Price History</Button>
                  <Button className="px-0 text-left" variant="link" onClick={this.handleTab} data-key="tabSpecifications">Specifications</Button>
                  {this.props.currentProduct.datasheet_url && (
                    <Button className="px-0" target="_blank" href={ `https://oxfordhackapi2019.herokuapp.com/${this.props.currentProduct.datasheet_url}` }>Datasheet</Button>
                  )}
                </Nav>

              <hr />
              <div>
              <InputGroup className="mb-1">
                <FormControl
                  placeholder="Qty"
                  aria-label=""
                  onChange={this.handleCalculate}
                />
                <InputGroup.Append>
                  <InputGroup.Text>{ this.state.totalCalculation }</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>

              </Col>
              <Col xs={9}>
              <div ref="tabMaterialNotes">
                <h2>Material Notes</h2>
                <Card className="mb-3">
                  <Card.Header>
                    Project Manager: Tony Ko / T4 Tower Building
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="small">
                        I wouldn't recommend this product, slow shipping times
                        and there are other alternatives.
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
                        Be mindful about whether these meet the codes necessary
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>
                <Card className="mb-3">
                  <Card.Header>Comment from a manager</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="small">
                        Anyone care to come up with something here?
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
                <div ref="tabStockLevels">
                <h2>Stock Levels</h2>
                This product is currently
                <span
                  className={
                    this.props.currentProduct.availability === "0" ||
                    !this.props.currentProduct.availability
                      ? "red-circle"
                      : "circle"
                  }
                />
                <strong>
                  {this.props.currentProduct.availability === "1"
                    ? "Available"
                    : "Unavailable"}
                </strong>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {this.props.currentProduct.vendor.name}
                    </Card.Title>
                    <p>{this.props.currentProduct.vendor.address}</p>
                    <p>
                      {this.props.currentProduct.vendor.address_2},
                      {this.props.currentProduct.vendor.city_state},
                      {this.props.currentProduct.vendor.postal_code}
                    </p>
                    <p>{this.props.currentProduct.vendor.country} <span role="img" aria-label="maple leaf">🍁</span></p>
                    <p>Stock Level: {this.props.currentProduct.stock_level}</p>
                  </Card.Body>
                </Card>
                </div>
                <div ref="tabPriceHistory">
                <h2>Price History</h2>
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="line"
                  width="500"
                />
                </div>
                <div ref="tabSpecifications">
                <h2>Specifications</h2>
                <ul>
                { this.props.currentProduct.specifications.map((spec, idx) => <li key={idx}>{spec}</li> ) }
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
