import React, { useState } from "react"

export default function GoogleTabs() {
    // let currentTab = "all" // <--- this can re-render component on update
    let [currentTab, setCurrentTab] = useState("all")

    function changeToAll() {
        // currentTab = "all" // <--- cant change our state varialbe currentTab directly
        setCurrentTab("all")
    }

    function changeToImages() {
        setCurrentTab("images")
    }

    function changeToVideos() {
        setCurrentTab("videos")
    }

    console.log("render")

    return (
        <div>
            currentTab:{currentTab}
            <hr />
            <ul>
                <li onClick={changeToAll}>all</li>
                <li onClick={changeToImages}>images</li>
                <li onClick={changeToVideos}> videos</li>
            </ul>
            
            {currentTab == "all" && (
                <div>
                    <h2>All section</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat eveniet assumenda iusto autem mollitia odit et,
                        reiciendis quia voluptates cum, tenetur dignissimos,
                        tempore est natus odio facilis reprehenderit quis
                        quibusdam.
                    </p>
                </div>
            )}
            {currentTab == "images" && (
                <div>
                    <h2>Images contents</h2>
                    <p>image-1</p>
                    <p>image-2</p>
                    <p>image-3</p>
                </div>
            )}
            {currentTab === "videos" && (
                <div>
                    <h2>vidoes contents</h2>
                    <p>video-1</p>
                    <p>video-2</p>
                    <p>video-3</p>
                </div>
            )}
        </div>
    )
}
