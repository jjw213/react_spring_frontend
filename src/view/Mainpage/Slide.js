import React,{useState, useEffect} from "react";
import axios from "axios";

function Slide(){

    const [animal, setAnimal] = useState([]);
    const [img1, setImg1] = useState([]);
    const [img2, setImg2] = useState([]);
    const [img3, setImg3] = useState([]);
    const [img4, setImg4] = useState([]);

    const endPoint = async()=>{
        axios.post(`/animal/animalList`,null, 
        {params:{numOfRows : 4 , kindcd:"개",upr_cd:6110000}})
        .then(res=>{setAnimal(res.data)
        setImg1(res.data[0].popfile)
        setImg2(res.data[1].popfile)
        setImg3(res.data[2].popfile)
        setImg4(res.data[3].popfile)
        })
        console.log(animal)
    }
    useEffect(()=>{
        endPoint();
    },[])

    
    return(
        <div className="slidebox">
            
            <input type="radio" name="slide" id="slide01" defaultChecked/>
            <input type="radio" name="slide" id="slide02"/>
            <input type="radio" name="slide" id="slide03"/>
            <input type="radio" name="slide" id="slide04"/>
            
            <div className="slidelist">
            
                <div className="slideitem">
                    {/* {animal && animal.map(ele =>
                        <div className="Float" key={ele.desertionNo}>
                            <img src={ele.popfile}/>
                        </div>)
                    } */}
                    <div className="Float" >
                            <img src={img1}/>
                        </div>
                    <div className="Float" >
                            <img src={img2}/>
                        </div>
                    <div className="Float" >
                            <img src={img3}/>
                        </div>
                    <div className="Float" >
                            <img src={img4}/>
                        </div>
                        <div className="Float" >
                            <img src={img1}/>
                        </div>
                </div>


            </div>
            
        </div>
    )
}

export default Slide