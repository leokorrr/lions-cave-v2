import React, { useEffect, useState } from 'react'
import { getProjectsFromAPI } from '../../../_services/data.service'
import TableRow from '../TableRow/TableRow'
import ProjectsTableHead from '../ProjectsTableHead/ProjectsTableHead'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

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
                    <ProjectsTableHead />
                </TableHead>
                <TableBody>
                    {projects.reverse().map(
                        project => (
                            <TableRow
                                key={project._id} 
                                id={project._id} 
                                name={project.name} 
                                type={project.type}
                                url={project.url}
                                projectColor={project.color}/>))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
