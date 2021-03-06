import React,{useState, useEffect, Suspense, useCallback} from "react";
import axios from "axios";

function Slide(){

    const [animal, setAnimal] = useState([]);
    const [img1, setImg1] = useState([]);
    // const [img2, setImg2] = useState([]);
    // const [img3, setImg3] = useState([]);
    // const [img4, setImg4] = useState([]);

    const endPoint = useCallback(()=>{
        axios.post(`/animal/mainList`,null, 
        {params:{numOfRows : 4 }})
        .then(res=>{setAnimal(res.data)
        setImg1(res.data[0].popfile)
        })
        return ()=>{}
    },[]);
    
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
                            <img src={ele.popfile}/>
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