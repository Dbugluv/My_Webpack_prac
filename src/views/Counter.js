import React, { Component } from 'react'
import { Button } from 'antd';
import * as counterActions from '../actions/counter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  

  render () {
    const { count } = this.props.stores
    return (
      <div className="counter">
        <Button onClick={() => this.props.onIncrement(count)}>+</Button>
        <div>
          { count }
        </div>
        <Button onClick={() => this.props.onDecrement(count)}>-</Button>
        <br />
      </div>
    )
  }
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function mapStateToProps(state) {
  return {
      stores: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators(counterActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
