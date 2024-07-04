import React, { useState ,useEffect } from "react"
import axios from "axios"

export default function Member() {
    /* re-render */
    const [users, setUsers] = useState([])
   
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setUsers(response.data)
        })
    },[])
    /* dependency array [] means component did mount */


    return (
        <>
            <h1> Component LifeCyle</h1>
            UseEffect
            <ul>
                <li>component did mount</li>
                <li>component did update</li>
                <li>component did unmount</li>
            </ul>
            <h1>Members List ( {users.length})</h1>
            <ul>
                {users.map((user) => {
                    return <li>{user.name}</li>
                })}
            </ul>
        </>
    )
}
