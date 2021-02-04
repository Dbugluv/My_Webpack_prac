import React, { Component } from 'react'
import Counter from './Counter'
import './app.scss'
import * as counterActions from '../actions/counter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// export default 
class App extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    const {count} = this.props.stores
    return (
      <div className="app">
        <h1 className="hello"> My React & Webpack practice</h1>
        <Counter 
          count={count}
          onIncrement={ () => this.props.counterActions.INCREMENT(count)} 
          onDecrement={ () => this.props.counterActions.DECREMENT(count)}
          />
      </div>
    )
  }
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
)(App)
