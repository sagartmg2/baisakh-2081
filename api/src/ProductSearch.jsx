import React, { useState } from "react"
export default function ProductSearch() {
    const [searchText, setsearchText] = useState("")

    /* 
        
        https://dummyjson.com/products/search?q=
        
        https://dummyjson.com/products/search?q=iphone  
    
    */

    return (
        <>
            <input type="text" placeholder="search" />
            <div>ProductSearch</div>
            <ul>
                <li>one</li>
                <li>two</li>
                <li>thre</li>
                ..
                ..
                ..
                27 more 
            </ul>
        </>
    )
}
