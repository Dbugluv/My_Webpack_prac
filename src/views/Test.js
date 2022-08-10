import React, { Component, useState, useEffect, useCallback, useRef  } from 'react'
import App from './App'
import './app.scss'

export default function  Test (params) {
  const [cle, setCle] = useState(null)
  const ref = useRef(0)
  const [num, setNum] = useState(ref.current);
  const [ number ,setNumber ] = useState(0)
  const handerClick = ()=>{
   //    setNumber(1)
   //    setNumber(2)
   //    setNumber(3)
      setNumber(state => state+1)
      // 获取上次 state = 1 
      setNumber(number+1)
      // 获取上次 state = 2
      setNumber(number+1)
      console.log('1d', number)
  }

  const addNum = () => {
    // setNum(num+1)
    // console.log(ref.current)
    // clearInterval(cle)
  }

  const question = () => {
    const response = {
      "data": {
        "nothing_totell": 111,
        "whatever": 'sttiny',
        "person": {
          "name": 'dxy',
          "personal_like_sth": 'sleep'
        }
      },
      "system_time": 11231231,
    }

    function traverse(optObj, resObj) {
      for(let attr in optObj) {
        const objVal = optObj[attr];
        const upperIndex = attr.indexOf('_') + 1;
        if(upperIndex !== 0) {
          let newAttr = attr.replace(/_([a-z])/g, (res, $1) => {
            return $1.toUpperCase()
          });
          resObj[newAttr] = objVal;
        } else {
          resObj[attr] = objVal;
        }
        if(typeof objVal === 'object') {
          resObj[attr] = {}
          traverse(objVal, resObj[attr]);
        }
      }
      return resObj;
    }
    function transfer(response) {
      const trans_obj = {}
      traverse(response, trans_obj)
    }

    transfer(response)
  }

  const traverse = (root) => {
    if(!root.val) return;
    if(root.right && root.left) {
      traverse(root.left)
      traverse(root.right)
    } else {
      return false;
    }
    
  }

  useEffect(()=> {
    question()
    // const inv = setInterval(() => {
    //   console.log('num', num)
    // }, 1000);
    // setCle(inv)
  }, [number])
  return (
    <button onClick={handerClick}>{num}</button>
  )
  
}

// export default function Test() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);

//   const handleClickButton1 = () => {
//     setCount1(count1 + 1);
//   };

//   const handleClickButton2 = useCallback(() => {
//     setCount2(count2 + 1);
//     console.log(count2)
//   }, [count2]);

//   return (
//     <div>
//       {count1, count2, count3}
//       <div>
//         <button onClickButton={handleClickButton1}>Button1</button>
//       </div>
//       <div>
//         <button onClickButton={handleClickButton2}>Button2</button>
//       </div>
//       <div>
//         <button
//           onClickButton={() => {
//             setCount3(count3 + 1);
//           }}
//         >
//           Button3
//         </button>
//       </div>
//     </div>
//   );
// }

// export default class Test extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       num: 1,
//       val: 0,
//     }
//   }

//   componentDidMount() {
//     this.setState({ val: this.state.val + 1 })
//     console.log(this.state.val)

//     this.setState({ val: this.state.val + 1 })
//     console.log(this.state.val)

//     setTimeout(_ => {
//       this.setState({ val: this.state.val + 1 })
//       console.log(this.state.val);

//       this.setState({ val: this.state.val + 1 })
//       console.log(this.state.val)
//     }, 0)

//   }

//   addNum() {
//       this.setState({num: this.state.num +1})
//       console.log('...;;.', this.state.num)
//       setTimeout(() => {
//         console.log('..', this.state.num)
//       }, 0);
      
//   }

//   render () {
//     console.log('didmou', this.state.num)
//     return (
//       <div className="father">
//         <button onClick={this.addNum.bind(this)}>hah</button>
//         {this.state.val}
//         <div className="son"></div>
//       </div>
//     )
//   }
// }

