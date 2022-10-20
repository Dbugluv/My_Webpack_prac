import React, { Component } from 'react'
import Counter from './Counter'
import './app.scss'
import * as counterActions from '../actions/counter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'antd';
import { hot } from 'react-hot-loader'
import img from '../assets/img.jpg'
import Swiper from 'COMPONENT/Swiper'

let mockimg = [
  'https://img2.baidu.com/it/u=2457675955,316774917&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img1.baidu.com/it/u=3384796346,381674655&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img2.baidu.com/it/u=1404596068,2549809832&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800',
  'https://img1.baidu.com/it/u=2784143606,2123682823&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img2.baidu.com/it/u=2457675955,316774917&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img1.baidu.com/it/u=3384796346,381674655&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
]
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

  testFuntion() {
    
  }


  render () {
    const {count} = this.props.stores
    return (
      <div className="app">
        <h1 className="hello"> My React & Webpack.</h1>
        <p>{this.state.showText}</p>
        <Swiper imgArr={mockimg}/>
        {/* <Counter 
          count={count}
          onIncrement={ () => this.props.counterActions.INCREMENT(count)} 
          onDecrement={ () => this.props.counterActions.DECREMENT(count)}
          /> */}
        <Button onClick={() => this.changeSubT()}>更改副标题</Button>
        <div>
          测试专用：
          {this.testFuntion()}
        </div>
        <img style={{padding: '10px', width: '500px'}} src={img}/>
        
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
const HotApp = hot(module)(App);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotApp)
