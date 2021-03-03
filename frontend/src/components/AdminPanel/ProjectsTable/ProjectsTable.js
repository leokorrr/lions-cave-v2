import React, { useEffect, useState } from 'react'
// import { useDispatch } from "react-redux"
import { getProjectsFromAPI } from '../../../_services/data.service'
import ProjectRow from '../ProjectRow/ProjectRow'
import ProjectTableHead from '../ProjectTableHead/ProjectTableHead'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

export default function ProjectsTable() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        getProjectsFromAPI()
            .then(res => {
                setProjects(res.data)
            })
    }, [])
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <ProjectTableHead />
                </TableHead>
                <TableBody>
                    {projects.map(
                        project => (
                            <ProjectRow
                                key={project._id} 
                                name={project.name} 
                                type={project.type}
                                url={project.url}
                                projectColor={project.color}/>))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
