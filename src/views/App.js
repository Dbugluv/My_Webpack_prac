import 'react-hot-loader/patch';
import React, { Component } from 'react'
import Counter from './Counter'
import './app.scss'
import * as counterActions from '../actions/counter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'antd';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showText: '热更新'
    }
  }
  
  changeSubT() {
    this.setState({showText: '更新后的副标题'})
  }

  render () {
    const {count} = this.props.stores
    return (
      <div className="app">
        <h1 className="hello"> My React & Webpack practice。</h1>
        <p>{this.state.showText}</p>
        <Counter 
          count={count}
          onIncrement={ () => this.props.counterActions.INCREMENT(count)} 
          onDecrement={ () => this.props.counterActions.DECREMENT(count)}
          />
        <Button onClick={() => this.changeSubT()}>更改副标题</Button>
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
