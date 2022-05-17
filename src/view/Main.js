import React from "react";
import Silde from "./Silde";

function Main() {
    return(
        <div className="main">

            <section id="section1">
                <div className="text_area">
                    <h1>
                        <span>section1</span>
                        <span>테스트 섹션의 위치입니다.......</span> 
                    </h1>
                </div>

                <div className="moveImage">
                    <Silde></Silde>
                </div>

            </section>

            <section id="section2">
                <h1>section2</h1>
            </section>

            <section id="section3">
                <h1>section3</h1>
            </section>

            <section id="section4">
                <h1>section4</h1>
            </section>

        </div>
    )
}

export default Main