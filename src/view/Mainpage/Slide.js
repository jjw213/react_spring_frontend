import React,{useState, useEffect, Suspense} from "react";
import axios from "axios";

function Slide(){

    const [animal, setAnimal] = useState([]);
    const [img1, setImg1] = useState([]);
    // const [img2, setImg2] = useState([]);
    // const [img3, setImg3] = useState([]);
    // const [img4, setImg4] = useState([]);

    const endPoint = async()=>{
        axios.post(`/animal/animalList`,null, 
        {params:{numOfRows : 4 , kindcd:"개",upr_cd:6110000, state:"protect"}})
        .then(res=>{setAnimal(res.data)
        setImg1(res.data[0].popfile)
        })
        console.log(animal)
    }
    useEffect(()=>{
        endPoint();
    },[])

    
    return(
        <div className="slidebox">
            <div className="glassimg"></div>
            <input type="radio" name="slide" id="slide01" defaultChecked/>
            <input type="radio" name="slide" id="slide02"/>
            <input type="radio" name="slide" id="slide03"/>
            <input type="radio" name="slide" id="slide04"/>
            
            <div className="slidelist">
            
                <div className="slideitem">
                    {animal && animal.map(ele =>
                        <div className="Float" key={ele.desertionNo}>
                            <Suspense fallback={<div className="Float" style={{width:"400px"}}>로딩중...</div>}>
                            <img src={ele.popfile}/>
                            </Suspense>
                        </div>)
                    }
                    <div className="Float" >
                            <img src={img1}/>
                        </div>
                </div>


            </div>
            
        </div>
    )
}

export default Slide