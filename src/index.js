// import App from './views/App'
import Test from './views/Test'
import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // 2021/2/2 Q：还有其他方式引入吗？
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import counter from './reducers/counter'  // reducers 
import { AppContainer } from 'react-hot-loader';  // 实现保留redux 状态的方法

const store = createStore(counter)

const render = Component => ReactDOM.render( 
  <AppContainer>
    <Provider store={store}>
      <Component />
    </Provider>
  </AppContainer>
  ,
  document.getElementById("app"))

render(Test);

if (module.hot) {
  module.hot.accept('./views/Test.js', () => { // 对根项目进行热加载
    const NextRootContainer = require('./views/Test.js').default;
    render(NextRootContainer);
  })
}



