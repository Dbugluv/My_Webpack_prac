import App from './views/App'
import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // 2021/2/2 Q：还有其他方式引入吗？
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import counter from './reducers/counter'  // reducers 

const store = createStore(counter)
console.log('process.env', process.env.NODE_ENV)
const render = Component => ReactDOM.render( 
    <Provider store={store}>
      <Component />
    </Provider>
  ,
  document.getElementById("app"))

render(App);

// if (module.hot) {
//   module.hot.accept('./views/App.js', () => { // 对根项目进行热加载
//     const NextRootContainer = require('./views/App.js').default;
//     render(NextRootContainer);
//   })
// }



