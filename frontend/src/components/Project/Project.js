import React from 'react'

export default function Project(props) {
    const {name, url, color} = props
    return (
        <div className="project">
            {name}
        </div>
    )
}
