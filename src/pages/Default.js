import React from 'react'
import './Default.css'

const Default = () => {
    document.title = "Page not found..."

    return (
        <div className="default_div">
            <h1 className={"default_title"}>404</h1>
            <h2 className={"default_subtitle"}>not found</h2>
            <p className={"default_line"}>We could not find the page you're looking for</p>
        </div>
    )
}

export default Default