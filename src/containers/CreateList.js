// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { setListName } from '../modules/project'
import { Redirect } from 'react-router'

// components
import { Container, Form, Button } from 'react-bootstrap'

// react
class CreateList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toNextPage: false
    }
    this.setListName = this.setListName.bind(this);
  }
  setListName(event) {
    this.props.setListName(this.refs.projFormElement.value)
    this.setState({toNextPage: true})
  }
  render(){
    return (
      <div>
        <Container>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control placeholder="List Name" ref="projFormElement" />
            </Form.Group>
            <Button variant="primary" onClick={this.setListName}>Create List</Button>
          </Form>
        </Container>
        { this.state.toNextPage && 
          <Redirect to='/CreateList' />
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return Object.assign({}, state)
}

function mapDispatchToProps(dispatch){
  return {
    setListName(value){
      dispatch(setListName(value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateList)