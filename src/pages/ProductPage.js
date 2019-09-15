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
      currentTab: "tabMaterialNotes",
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
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav(event) {
    this.props.setPage(event.target.getAttribute("data-key") || event.currentTarget.getAttribute("data-key"));
  }
  handleTab(event) {
    this.setState({ currentTab: event.target.getAttribute("data-key") })
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
              <Col className="border-right" xs={3}>
                <Button className="mb-3" variant="primary" block onClick={this.handleNav} data-key="ViewList">
                  ← Back to List
                </Button>
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
              </Col>
              <Col xs={9}>
              <div className={ this.state.currentTab === "tabMaterialNotes" ? "d-block" : "d-none"} >
                <h2>Material Notes</h2>
                <Card className="mb-3">
                  <Card.Header>
                  Danyal Parra / T4 Tower Building
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p className="small">
                        <em>
                      I wouldn’t recommend this product, slow shipping times and there are other alternatives.
                      </em>
                        <p className="small">
                        Posted Date: 09/15/2019
                        </p>
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>
                <Card className="mb-3">
                  <Card.Header>
                    Project Manager: Keith Barajas / Office Building
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                      I bought it for our remodeling project in Vancouver. Before I hated to clean window seals now it’s so easy and fresh looking.
                      <p className="small">
                        Posted Date: 09/15/2019
                        </p>
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>
                <Card className="mb-3">
                  <Card.Header>Design Lead: Leila Shields / TX Square Building</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                      We applied to our balcony following instructions. The following spring, we noticed cracks, Reapplied but cracked again and peeled the following spring. This was expensive and a total waste of our time and money
                        <p className="small">
                        Posted Date: 09/15/2019
                        </p>
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
                <div className={ this.state.currentTab === "tabStockLevels" ? "d-block" : "d-none"} >
                  <h2>Stock Levels</h2>
                  <hr/>
                  <p>
                    This product is currently
                    <span
                      className={
                        this.props.currentProduct.availability === "0" ||
                        !this.props.currentProduct.availability
                          ? "red-circle mx-2"
                          : "circle mx-2"
                      }
                    />
                    <strong>
                      {this.props.currentProduct.availability === "1"
                        ? "Available"
                        : "Unavailable"}
                    </strong>
                  </p>
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
                <div className={ this.state.currentTab === "tabPriceHistory" ? "d-block" : "d-none"} >
                  <h2>Price History</h2>
                  <hr/>
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    width="500"
                  />
                </div>
                <div className={ this.state.currentTab === "tabSpecifications" ? "d-block" : "d-none"} >
                  <h2>Specifications</h2>
                  <hr/>
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
