import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getProjects } from '../../_actions/data'
import ProjectsRow from '../ProjectsRow/ProjectsRow'

export default function Projects() {
    const view = useSelector(state => state.view)
    const dispatch = useDispatch()
    const projectTypes = ['programming', 'design', 'companies']

    useEffect(() => {
        dispatch(getProjects())
    }, [view.name])
    return (
        <div className="projects">
            {projectTypes.map((projectType, index) => (
                <ProjectsRow key={index} projectType={projectType}/>
            ))}
        </div>
    )
}
