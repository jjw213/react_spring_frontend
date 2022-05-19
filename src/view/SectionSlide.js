import React,{useState, useEffect} from "react";

function SectionSlide(){

    return(
        <div className="slidebox">
            
            <input type="radio" name="slide" id="slide01" checked/>
            <input type="radio" name="slide" id="slide02"/>
            <input type="radio" name="slide" id="slide03"/>
            <input type="radio" name="slide" id="slide04"/>
            
            <div className="slidelist">
            
                <div className="slideitem">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}
export default SectionSlide