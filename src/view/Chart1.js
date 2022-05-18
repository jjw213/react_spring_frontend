
import { ResponsivePie } from '@nivo/pie'
import React,{useState, useEffect, Suspense} from "react";
import axios from "axios";




function MyResponsivePie() { 
    const data = [
        {
            id: "경기도",
            value: 10
          },
          {
            "id": "c",
            "label": "c",
            "value": 600
          },
          {
            "id": "java",
            "label": "java",
            "value": 60
          },
          {
            "id": "python",
            "label": "python",
            "value": 460
          },
          {
            "id": "make",
            "label": "make",
            "value": 460
          }
          ,
          {
            "id": "make2",
            "label": "make2",
            "value": 460
          },
          {
            "id": "make21",
            "label": "make21",
            "value": 460
          },
          {
            "id": "make211",
            "label": "make211",
            "value": 460
          },
          {
            "id": "make21111",
            "label": "make21111",
            "value": 460
          },
          {
            "id": "make22",
            "label": "make22",
            "value": 460
          },
          {
            "id": "make222",
            "label": "make222",
            "value": 460
          },
          {
            "id": "make2222",
            "label": "make2222",
            "value": 460
          },
          {
            "id": "make23",
            "label": "make23",
            "value": 460
          },
          {
            "id": "make233",
            "label": "make233",
            "value": 460
          }
      ];
    const [animal, setAnimal] = useState([]);

    const endPoint = async()=>{
        axios.post(`/animal/countList`,null, 
        {params:{numOfRows : 1000 , kindcd:"개"}})
        .then(res=>{setAnimal(res.data)
            console.log(res.data)
        
        })
        
    }
    useEffect(()=>{
        endPoint();
    },[])


    return (


        <Suspense>
        <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.3}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'green_blue' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '3'
                ]
            ]
        }}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '3'
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[]}
    />
</Suspense>
)}
export default MyResponsivePie