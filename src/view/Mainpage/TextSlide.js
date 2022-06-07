import React from "react";
import { Link } from "react-router-dom";


function TextSlide() {
    return(
        <div className="textslide">
            <div className="card">
            <h1 className="entry-title">
                <Link to ="/apiTest">
                    가족이 되어주기 
                </Link>
            </h1>
            </div>
        </div>
    )
}

export default TextSlide