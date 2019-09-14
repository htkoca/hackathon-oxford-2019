// dependencies
import React from 'react'
import { connect } from 'react-redux'
import { setProjName } from '../modules/project'
import { Redirect } from 'react-router'

// components
import { Container, Form, Button } from 'react-bootstrap'

// react
class CreateProject extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toNextPage: false
    }
    this.setProjName = this.setProjName.bind(this);
  }
  setProjName(event) {
    this.props.setProjName(this.refs.projFormElement.value)
    this.setState({toNextPage: true})
  }
  render(){
    return (
      <div>
        <Container>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control placeholder="Project Name" ref="projFormElement" />
            </Form.Group>
            <Button variant="primary" onClick={this.setProjName}>Create Project</Button>
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
    setProjName(value){
      dispatch(setProjName(value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject)