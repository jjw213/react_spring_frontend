import React,{useState, useEffect} from "react";
import axios from "axios";

function Slide(){

    const [animal, setAnimal] = useState([]);

    const endPoint = async()=>{
        axios.post(`/animal/animalList`,null, 
        {params:{numOfRows : 4 , kindcd:"개",upr_cd:6110000}})
        .then(res=>setAnimal(res.data))
        console.log(animal)
    }
    useEffect(()=>{
        endPoint();
    },[])

    
    return(
        <div class="slidebox">
            
            <input type="radio" name="slide" id="slide01" checked/>
            <input type="radio" name="slide" id="slide02"/>
            <input type="radio" name="slide" id="slide03"/>
            <input type="radio" name="slide" id="slide04"/>
            
            <div className="slidelist">
            
                <div className="slideitem">
                    {animal && animal.map(ele =>
                        <div className="Float" key={ele.desertionNo}>
                            <img src={ele.popfile}/>
                        </div>)
                    }
                </div>
            
            </div>
            
        </div>
    )
}

export default Slide