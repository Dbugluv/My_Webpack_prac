import React, {useEffect, useState} from 'react'
import { Row } from 'antd';
import './index.scss'

let img = [
  'https://img2.baidu.com/it/u=2457675955,316774917&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img1.baidu.com/it/u=3384796346,381674655&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img2.baidu.com/it/u=1404596068,2549809832&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800',
  'https://img1.baidu.com/it/u=2784143606,2123682823&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img2.baidu.com/it/u=2457675955,316774917&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img1.baidu.com/it/u=3384796346,381674655&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
]

export default function Swiper(props) {
    const {imgArr, autoPlay} = props;
    console.log('props;', props)
    const [currentIndex, setCurrentIndex] = useState(1);
    const [backgroudImg, setBackgroudImg] = useState([]);
    const [cleId, setCleId] = useState(null)
  
    useEffect(()=> {
      init()
    }, [])
    
    useEffect(()=> {
      if(autoPlay) {
        autoMove()
        clearInterval(cleId)
      }
    }, [currentIndex])
  
    const init = () => {
      setBackgroudImg(imgArr)
      const imgList_wrapper = document.getElementsByClassName('imgList_wrapper')[0];
      imgList_wrapper.style.transition = "none";
      imgList_wrapper.style.marginLeft = `-${400}px`;
    }
  
    const autoMove = () => {
        let timer = setInterval(() => {
          changeImg('right')
        }, 1000);
        setCleId(timer)
    }
  
    const changeImg = (type) => {
      const imgList_wrapper = document.getElementsByClassName('imgList_wrapper')[0];
      const length = backgroudImg.length;
      let index = currentIndex;
      if(type === 'left') {
        index--;
        if(index === 0) {
          imgList_wrapper.style.transition = "0s";
          imgList_wrapper.style.marginLeft = `-${400*(length-1)}px`;
          index = length - 2;
        }
        setTimeout(() => {
          imgList_wrapper.style.transition = "1s";
          imgList_wrapper.style.marginLeft = `-${(index) * 400 }px`;
        }, 0);
        setCurrentIndex(index);
      } else {
        index++;
        if(index === length) {
            imgList_wrapper.style.transition = "none"
            imgList_wrapper.style.marginLeft = `-${400}px`;
            index = 2; // 为了衔接下面的transition
        }
        setTimeout(() => {
          imgList_wrapper.style.transition = "1s";
          imgList_wrapper.style.marginLeft = `-${ index * 400}px`;
        }, 0);
        setCurrentIndex(index);
      };
    }

  return (
    <div className="task-progress">
      <Row style={{display: 'flex', justifyContent: 'center'}}>
        <div className="img_cover">
          <span className="left btn" onClick={() => changeImg('left')}>{'<'}</span>
          <div className="imgList_wrapper">
            {
              backgroudImg.map((item) => {
                return <div key={item}><img className="singleImg" src={item} /></div>
              })
            }
          </div>
          <span className="right btn" onClick={() => changeImg('right')}>{'>'}</span>
        </div>
      </Row>
    </div>
  )
}