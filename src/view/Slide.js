import React,{useState, useEffect} from "react";
import axios from "axios";

function Slide(){

    const [animal, setAnimal] = useState([]);

    // let API_URL = "http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?bgnde=20140301&endde=20140430&pageNo=1&numOfRows=10&ServiceKey=";
    // let API_KEY = "d7DXF5UusAcJ7jFQYs3HTZ4c%2FrU7kRtgZOq6EIVTNyL5VJ%2B6Lu9Wp0ge6uWOxn2XbPuKuB42fiGPe4U1bfmWtA%3D%3D";
    const [Num, setNum] = useState("")

    const endPoint = async()=>{
        axios.post(`/animal/animalList`,null, 
        {params:{numOfRows : 4 , kindcd:"개"}})
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