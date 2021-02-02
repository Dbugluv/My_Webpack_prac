import App from './views/App'
import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'; // 2021/2/2 Q：还有其他方式引入吗？

ReactDOM.render( <App /> , document.getElementById("app"))

// 2021/2/2 Q：React 下如何热更新模块？
// if (module.hot) {
//   module.hot.accept('./views/App.js', function () { // 只热更新此模块
//     console.log('热更新 App.js!');
//     ReactDOM.render( <App /> , document.getElementById("app"))
//   })
// }



