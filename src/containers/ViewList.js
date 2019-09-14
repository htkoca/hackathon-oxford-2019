// dependencies
import React from 'react'
import { connect } from 'react-redux'

// components
import { Container, Button } from 'react-bootstrap'
import Item from '../components/Item'
import { Link } from 'react-router-dom'

// react
class ViewList extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
      <Container>
        <h2>{ this.props.project.projectName } > { this.props.project.listName }</h2>
        <Item/>
        <Item/>
        <Link role="button" className="btn btn-primary mr-2" to="/SearchProducts">Add Item</Link>
        <Button className="mr-2" variant="secondary">Post Analysis</Button>
        <Button className="mr-2" variant="secondary">Create PDF</Button>
      </Container>
    </div>
    )
  }

}

// export default ViewList;

function mapStateToProps(state){
  return Object.assign({}, state)
}

function mapDispatchToProps(dispatch){
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewList)