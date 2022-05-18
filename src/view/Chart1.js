
import { ResponsivePie } from '@nivo/pie'
import React,{useState, useEffect, Suspense} from "react";
import axios from "axios";




function MyResponsivePie() { 

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
        data={animal}
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