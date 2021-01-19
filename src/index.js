function component() {
  let ele = document.createElement('div');
  ele.innerHTML = 'Hello,this is my webpack!';

  return ele;
}

document.body.appendChild(component());