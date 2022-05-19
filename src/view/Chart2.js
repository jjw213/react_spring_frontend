import { ResponsivePie } from '@nivo/pie'
import React,{useState, useEffect} from "react";
import axios from "axios";


function MyResponsivePie() {

    const [animal, setAnimal] = useState([]);

    const endPoint = async()=>{
        axios.post(`/animal/countList`,null, 
        {params:{numOfRows : 1000 , kindcd:"고양이"}})
        .then(res=>{setAnimal(res.data)
            console.log(res.data)
        
        })
        
    }
    useEffect(()=>{
        endPoint();
    },[])

    return (
        <ResponsivePie
            data={animal}
            margin={{ top: 55, right: 80, bottom: 55, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: 'greens' }}
            borderWidth={1}
            borderColor="black"
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor="black"
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
)
}
export default MyResponsivePie