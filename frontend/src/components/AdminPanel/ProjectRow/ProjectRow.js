import React from 'react'

export default function ProjectRow(props) {
    const { name, type, url, projectColor} = props
    return (
        <div>
            {name}, {type}, {url}, {projectColor}
        </div>
    )
}
