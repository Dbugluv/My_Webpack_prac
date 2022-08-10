import React, {useEffect, useState} from 'react'
import './app.less'

export default function TaskProgress() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const backgroudImg = ['https://img1.baidu.com/it/u=3384796346,381674655&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img2.baidu.com/it/u=1404596068,2549809832&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800',
  'https://img1.baidu.com/it/u=2784143606,2123682823&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img2.baidu.com/it/u=2457675955,316774917&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
]

  // useEffect(()=> {
  //   autoMove()
  // }, [currentIndex])

  function autoMove() {
    // const imgList_wrapper = document.getElementsByClassName('imgList_wrapper')[0];
    for(let i = 0; i < 3; i++) {
      console.log('i', i)
      setCurrentIndex(i);
      console.log('currentIndex', currentIndex)
      // changeImg('right')
    }
  }

  const changeImg = (type) => {
    const imgList_wrapper = document.getElementsByClassName('imgList_wrapper')[0];
    imgList_wrapper.style.transition = "1s";
    let index = currentIndex;
    const length = backgroudImg.length;
    if(type === 'left') {
      if(currentIndex === 1) {
        imgList_wrapper.style.transition = "0s" // 但是不够顺滑
        index = length + 1;
      }
      imgList_wrapper.style.marginLeft = `-${(index - 2 ) * 400 }px`;
      setCurrentIndex(index-1);
    } else {
      if(currentIndex === length) {
        imgList_wrapper.style.transition = "0s";
        index = 0;
      }
      imgList_wrapper.style.marginLeft = `-${ index * 400}px`;
      setCurrentIndex(index+1);
    };
  }

  return (
    <div className="task-progress">
      <Row style={{display: 'flex', justifyContent: 'center'}}>
        <div className="img_cover">
          <button className="left" onClick={() => changeImg('left')}>{'<'}</button>
          <div className="imgList_wrapper">
            {
              backgroudImg.map((item) => {
                return <div key={item}><img className="singleImg" src={item} /></div>
              })
            }
          </div>
          <button className="right"onClick={() => changeImg('right')}>{'>'}</button>
        </div>
      </Row>
    </div>
  )
}