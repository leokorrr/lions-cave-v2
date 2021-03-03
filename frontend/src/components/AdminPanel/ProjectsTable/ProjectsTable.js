import React, { useEffect, useState } from 'react'
// import { useDispatch } from "react-redux"
import { getProjectsFromAPI } from '../../../_services/data.service'
import ProjectRow from '../ProjectRow/ProjectRow'

export default function ProjectsTable() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        getProjectsFromAPI()
            .then(res => {
                setProjects(res.data)
            })
    }, [])
    return (
        <div>
            {projects.map(
                project => (
                    <ProjectRow
                        key={project._id} 
                        name={project.name} 
                        type={project.type}
                        url={project.url}
                        projectColor={project.color}/>))}
        </div>
    )
}
