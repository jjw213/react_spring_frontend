import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../css/img/image1.png";
import image2 from "../../css/img/image2.png";
import image3 from "../../css/img/image3.png";
import image4 from "../../css/img/image4.png";
import { useSelector } from "react-redux";
import "../../css/button.css";

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
    const user = useSelector((state) => state.user)
  const checkNext = () => {
    const labels = document.querySelectorAll('#slider label');
    const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1; 
    setSelectedIndex(nextIndex);
  }

  useInterval(()=>{setCount(count<2? count+1 : 0);check(count)}, 4000);
  const check = index => setSelectedIndex(index);

function useInterval(callback, delay) {
    const savedCallback = useRef(); // ????????? ????????? callback??? ????????? ref??? ?????? ?????????.
  
    useEffect(() => {
      savedCallback.current = callback; // callback??? ?????? ????????? ref??? ???????????? ?????????.
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current(); // tick??? ???????????? callback ????????? ???????????????.
      }
      if (delay !== null) { // ?????? delay??? null??? ???????????? 
        let id = setInterval(tick, delay); // delay??? ????????? interval??? ?????? ???????????????.
        return () => clearInterval(id); // unmount??? ??? clearInterval??? ?????????.
      }
    }, [delay]); // delay??? ?????? ????????? ?????? ????????????.
  }

    return (
      <div className="space">
        <div className="flex flex-wrap sm:-m-4 -mx-6 -mb-10 -mt-4">
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center" 
          style={{float:"left",marginTop:"19%"}}>
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button className="w-btn-neon2" onClick={checkNext}>{'<'}</button>
            </div>
          </div>
          <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center" 
          style={{    margin: "5% 15%" ,float:"left"}}>
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
              <button className="w-btn-neon2" onClick={checkNext}>{'>'}</button>
            </div>
          </div>
          <div id="Textlink"
          style={{float:"left"}}>
          {selectedIndex==0? <div>
            <h1>???????????? ?????? ?????????</h1>
            <p>
              ????????? ??????????????? ?????? ??????????????? ?????????.
              <br/>
              ????????? ????????? ????????? ????????? ????????? ?????????
              <br/>
              ?????????????????? ????????????????????????.
            </p>
            <button className="w-btn-outline w-btn-blue-outline" type="button"><Link to = {"/apiTest"}>Click</Link></button>
          </div> : 
          selectedIndex==1?<div>
            <h1>????????????????????? ????????????</h1>
            <p>
              ???????????? ???????????? ???????????????.
              <br/>
              ??????????????? ????????? ????????? ????????????.
            </p>
            <button className="w-btn-outline w-btn-brown-outline" type="button"><Link to = {"/community"}>Click</Link></button>
          </div>:
          selectedIndex==2?<div>
            <h1>????????? ??????</h1>
            <p>
              ??????????????? ???????????????
              <br/>
              ??????????????? ???????????? ??????????????? ????????????.
              <br/>
              ???????????? ????????? ???????????????.
            </p>
            <button className="w-btn-outline w-btn-green-outline" type="button">
              {user.userData == null?
              <Link to = {"/members/memberLogin"}>Click</Link>:
              <Link to = {"/MyPage"}>Click</Link>
            }</button>
          </div>:""
        }
        </div>
        </div>
        
      </div>
    );
}
export default SectionSlide