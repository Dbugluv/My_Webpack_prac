import './styles.css';
import Icon from './img.jpg';

function component() {
  let ele = document.createElement('div');
  ele.innerHTML = 'Hello,this is my webpack!';
  ele.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;
  ele.appendChild(myIcon);

  return ele;
}

document.body.appendChild(component());