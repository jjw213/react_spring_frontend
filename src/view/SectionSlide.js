import React from "react";
import image1 from "../css/img/image1.png";
import image2 from "../css/img/image2.png";
import image3 from "../css/img/image3.png";
import image4 from "../css/img/image4.png";

function SectionSlide(){

    return(
        <div className="slidebox2">
            
            <input type="radio" name="slide2" id="slide05" checked/>
            <input type="radio" name="slide2" id="slide06"/>
            <input type="radio" name="slide2" id="slide07"/>
            <input type="radio" name="slide2" id="slide08"/>
            <input type="radio" name="slide2" id="slide09"/>
            <input type="radio" name="slide2" id="slide10"/>
            
            <div className="slidelist2">
            
                <div className="slideitem2">
                    <div>
                        <img src={image4}/>
                    </div>
                    <div>
                        <img src={image1}/>
                    </div>
                    <div>
                        <img src={image2}/>
                    </div>
                    <div>
                        <img src={image3}/>
                    </div>
                    <div>
                        <img src={image4}/>
                    </div>
                    <div>
                        <img src={image1}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default SectionSlide