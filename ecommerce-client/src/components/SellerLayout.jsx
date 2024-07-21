import React from "react"

export default function SellerLayout() {
    return (
        <div>
            <header>header</header>

            <div className="grid grid-cols-5">
                <div className="col-span-1">
                    <ul>
                        <li>dashboard</li>
                        <li>products</li>
                        <li>products add</li>
                    </ul>
                </div>
                <div className="col-span-4">dashboard</div>
            </div>
        </div>
    )
}
