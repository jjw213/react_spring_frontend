import React, { useEffect, useState } from 'react'

function ListPage() {
    const [message, setMessage] = useState([]);
    useEffect(() => {
        fetch(`/members/memberList`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setMessage(data);
            });
    }, []);
    // console.log(message);
    return (
        <div>

            {message.map((message, v) =>(
                // <MemberList id={v.id} name = {v.name}></MemberList>
                <li key={message.id}>
                {message.name}
                의 id = {message.id}
                이고 비번 = {message.password}
              </li>
            ))}</div>
    )}


function MemberList(props){
    return(
            <div>
                <h1>ID: {props.id}</h1>
                <h1>NAME :{props.name} </h1>
            </div>
            )
    }
            export default ListPage