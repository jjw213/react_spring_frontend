import React,{ useEffect, useState } from 'react'

function ApiTest() {
    const [Name, setName] = useState("");
    let API_URL = "http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/kind?up_kind_cd=417000&ServiceKey=";
    let API_KEY = "d7DXF5UusAcJ7jFQYs3HTZ4c%2FrU7kRtgZOq6EIVTNyL5VJ%2B6Lu9Wp0ge6uWOxn2XbPuKuB42fiGPe4U1bfmWtA%3D%3D";

    useEffect(()=>{
        const endPoint = `${API_URL}${API_KEY}`;
        fetch(endPoint)
        .then(res=>res.json())
        .then(res=>console.log(res))
    })
  return (
    <div>
      
    </div>
  )
}

export default ApiTest
