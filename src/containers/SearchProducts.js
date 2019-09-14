// dependencies
import React from 'react'

// components
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import Item from '../components/Item'

// react
class SearchProducts extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      products: []
    }
  }

  handleChange(event) {

    let products = [];
    
    if(event.target.value.length >= 3) {

      let self = this;

      this.state.materials.forEach(function(el) {
 
        self.state.manufacturers.forEach(function(manufacturer) {
          if(manufacturer.id === el.manufacturer_source) {
            el.manufacturer = manufacturer.manufacturer;
          }
        });

        if(!el.manufacturer) {
          el.manufacturer = '';
        }
 
        el.keywords = el.keywords.toLowerCase();

        if(el.model_name.toLowerCase().includes(event.target.value.toLowerCase()) || el.colour_finish.toLowerCase().includes(event.target.value.toLowerCase()) || el.manufacturer.toLowerCase().includes(event.target.value.toLowerCase()) || el.keywords.split(",").includes(event.target.value.toLowerCase())) {
          products.push(el);
        }
      });

      this.setState({ products: products })

    } else {
      this.setState({ products: products })
    }
  }

  componentDidMount() {
    fetch('https://oxfordhackapi2019.herokuapp.com/materials')
      .then(response => response.json())
      .then(data => this.setState({ materials: data }));

      fetch('https://oxfordhackapi2019.herokuapp.com/manufacturers')
      .then(response => response.json())
      .then(data => this.setState({ manufacturers: data }));

      // fetch('https://oxfordhackapi2019.herokuapp.com/vendors')
      // .then(response => response.json())
      // .then(data => this.setState({ vendors: data }));
  }

  render() {
    return (
      <div>
      <Container>
        <Form>
          <Row>
            <Col xs={9}>
              <Form.Control placeholder="Search Product" onChange={this.handleChange} />
            </Col>
            <Col xs={3}>
              <Button variant="primary" block onClick={this.handleChange}>Search Page</Button>
            </Col>
          </Row>
        </Form>
        { this.state.products.map((product, idx) => <Item product={product} image={product.image_url} name={product.model_name} key={idx}/>)}
        {/* <Item showButtons={true}/>
        <Item showButtons={true}/>
        <Item showButtons={true}/>
        <Item showButtons={true}/>
        <Item showButtons={true}/> */}
      </Container>
    </div>
    )
  }
}

export default SearchProducts;