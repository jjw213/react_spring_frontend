import React, { useEffect, useRef, useState } from "react";
import image1 from "../../css/img/image1.png";
import image2 from "../../css/img/image2.png";
import image3 from "../../css/img/image3.png";
import image4 from "../../css/img/image4.png";

function SectionSlide(){

    // return(
        
    //     <div className="slidebox2">
            
    //         <input type="radio" name="slide2" id="slide05" defaultChecked/>
    //         <input type="radio" name="slide2" id="slide06"/>
    //         <input type="radio" name="slide2" id="slide07"/>
    //         <input type="radio" name="slide2" id="slide08"/>
    //         <input type="radio" name="slide2" id="slide09"/>
    //         <input type="radio" name="slide2" id="slide10"/>
            
    //         <div className="slidelist2">
            
    //             <div className="slideitem2">
    //                 <div className="Float2">
    //                     <img src={image4}/>
    //                 </div>
    //                 <div className="Float2">
    //                     <img src={image1}/>
    //                 </div>
    //                 <div className="Float2">
    //                     <img src={image2}/>
    //                 </div>
    //                 <div className="Float2">
    //                     <img src={image3}/>
    //                 </div>
    //                 <div className="Float2">
    //                     <img src={image4}/>
    //                 </div>
    //                 <div className="Float2">
    //                     <img src={image1}/>
    //                 </div>
    //                 <div className="Float2">
    //                     <img src={image2}/>
    //                 </div>
    //             </div>
    //         </div>
            
    //     </div>
    // )
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [count, setCount] = useState(0);

  const checkNext = () => {
    const labels = document.querySelectorAll('#slider label');
    const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1; 
    setSelectedIndex(nextIndex);
  }

  useInterval(()=>{setCount(count<2? count+1 : 0);check(count)}, 4000);
  const check = index => setSelectedIndex(index);

function useInterval(callback, delay) {
    const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.
  
    useEffect(() => {
      savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
      }
      if (delay !== null) { // 만약 delay가 null이 아니라면 
        let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
        return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
      }
    }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
  }

    return (
      <div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center" 
          style={{float:"left",marginTop:"19%"}}>
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button onClick={checkNext}>{'<'}</button>
            </div>
          </div>
          <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center" 
          style={{    margin: "5% 9%" ,float:"left"}}>
            <section
              id="slider"
              className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
            >
              <input
                type="radio"
                name="slider"
                id="s1"
                checked={selectedIndex === 0}
                onClick={() => check(0)}
                readOnly
              />
              <input 
                type="radio" 
                name="slider" 
                id="s2" 
                checked={selectedIndex === 1}
                onClick={() => check(1)}
                readOnly
              />
              <input
                type="radio"
                name="slider"
                id="s3"
                checked={selectedIndex === 2}
                onClick={() => check(2)}
                readOnly
              />
              <label htmlFor="s1" id="slide1">
                <img className="fea" src={image1} height="100%" width="100%"/>
              </label>
              <label htmlFor="s2" id="slide2">
                <img className="fea" src={image2} height="100%" width="100%"/>
              </label>
              <label htmlFor="s3" id="slide3">
                <img className="fea" src={image3} height="100%" width="100%"/>
              </label>
            </section>
          </div>
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center"
           style={{float:"left",marginTop:"19%"}}>
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button onClick={checkNext}>{'>'}</button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default SectionSlide