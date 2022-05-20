import React from "react";
import Slide from "./Slide";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import SectionSlide from "./SectionSlide";
import TextSlide from "./TextSlide";

function Main() {
    return(
        <div className="main">

            <section id="section1">
                <div className="text_area">
                    <h1>
                        <span>새로운 가족이 되어주세요.</span>
                        <span>여러분들의 따뜻한 손길이 필요합니다.</span> 
                    </h1>
                </div>
                <div className="moveImage">
                    <Slide></Slide>
                </div>
            </section>
        
            <section id="section2_forntpage">

                <div>
                    <h1>
                        <span>지역별 유기동물</span>
                        <span>개/고양이 DB 분포</span>
                    </h1>
                </div>

                <div>
                    <div className="dogimg"></div>
                    <div className="catimg"></div>
                </div>

            </section>

            <section id="section2">
                <Chart1></Chart1>
            </section>

            <section id="section3">
                <Chart2></Chart2>
            </section>


            <section id="section4">
                <TextSlide></TextSlide>
                <SectionSlide></SectionSlide>
            </section>


        </div>
    )
}

export default Main