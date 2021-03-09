import React from 'react'
import { useSelector } from "react-redux"
import Project from '../Project/Project'

export default function ProjectsRow(props) {
    const {projectType} = props
    const projects = useSelector(state => state.data)
    return (
        <div className="projects-row">
            <h2 className="projects-row__title">{projectType.charAt(0).toUpperCase() + projectType.slice(1)} projects</h2>
            {(projects.projects && projects.projects.length > 0) &&
                projects.projects
                    .filter((project, index) => project.type === projectType)
                    .map((filteredProject, index) => (
                        <Project key={index} name={filteredProject.name} />
                    ))}
        </div>
    )
}
