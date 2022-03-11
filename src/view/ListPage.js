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
    console.log(message);
    return (
        <div>
            <ul>
                {message.map((v, idx) =>
                    <li key={
                        `${idx}${v}`
                    }> {v} </li>)}
            </ul> 
        </div>
    )
}

export default ListPage