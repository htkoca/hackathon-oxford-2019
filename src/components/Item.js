// dependencies
import React from 'react'

// components
import { Card, Row, Col, Button } from 'react-bootstrap'

// react
const Item = (props) => {
  return (
    <Card className="my-2">
      <Card.Body>
        <Row>
          <Col xs={9}>

            <div className="img-fluid float-left mr-4" style={{ backgroundSize: "cover", backgroundImage: "url('https://oxfordhackapi2019.herokuapp.com/"+props.image+"')", width: "100px", height: "100px"}}/>

            <Card.Title className="my-2">{ props.name } <span className={ (props.product.availability == "0" ? 'red-circle' : 'circle')}/>
            </Card.Title>

            <p>{ props.product.manufacturer }</p>

          </Col>
          { props.showButtons &&
            <Col xs={3}>
              <Button variant="secondary" block>Features</Button>
              <Button variant="secondary" block>Add Product</Button>
            </Col>
          }
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Item
