import './styles.css';
import Icon from './img.jpg';
import print from './print';

function component() {
  let ele = document.createElement('div');
  ele.innerHTML = 'Hello,this is my webpack!';
  ele.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;
  ele.appendChild(myIcon);
  var btn = document.createElement('button');
  btn.innerHTML = '点击这里，查看console.';
  btn.onclick = print;
  ele.appendChild(btn);

  return ele;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () { // 只热更新此模块
    console.log('Accepting the updated printMe module!');
    print();
  })
}

