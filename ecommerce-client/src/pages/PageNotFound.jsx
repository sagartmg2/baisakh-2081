import React from "react"
import { Link } from "react-router-dom"
export default function PageNotFound() {
    return (
        <div>
            <img
                src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg"
                alt=""
                srcset=""
            />
          <div className="flex justify-center">
          <Link className="btn" to="/">
                got to home
            </Link>
          </div>
        </div>
    )
}
