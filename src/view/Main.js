import React from "react";
import Slide from "./Slide";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";

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

            <section id="section2">
                <Chart1></Chart1>
            </section>
            <section id="section3">
                <Chart2></Chart2>
            </section>


            <section id="section4">
                <h1>section4</h1>
            </section>


        </div>
    )
}

export default Main