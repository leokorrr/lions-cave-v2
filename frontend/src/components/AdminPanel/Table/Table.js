import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import TableRow from '../TableRow/TableRow'
import TableHeader from '../TableHeader/TableHeader'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import { getFields } from '../../../_helpers/getFields'
import { getPositions, getLinks, getProjects } from '../../../_actions/data'

export default function TableGenerator() {
    const [fields, setFields] = useState([])
    const dispatch = useDispatch()
    const view = useSelector(state => state.view)
    const links = useSelector(state => state.data)
    const projects = useSelector(state => state.data)
    const positions = useSelector(state => state.data)
    useEffect(() => {
        setFields(getFields(view.name))
        switch (view.name) {
            case 'projects':
                dispatch(getProjects())
                break
            case 'links':
                dispatch(getLinks())
                break
            case 'positions': 
                dispatch(getPositions())
                break
            default:
                break
        }
    }, [view.name])
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableHeader fields={fields}/>
                </TableHead>
                <TableBody>
                {(links.links && links.links.length > 0) 
                    && links.links.map(
                        link => (
                            <TableRow 
                                key={link._id}
                                id={link._id} 
                                name={link.name} 
                                url={link.url}
                                image={link.imageTitle}
                            />
                        ))}
                {(projects.projects && projects.projects.length > 0) 
                    && projects.projects.map(
                        project => (
                            <TableRow
                                key={project._id} 
                                id={project._id} 
                                name={project.name} 
                                type={project.type}
                                url={project.url}
                                projectColor={project.color}
                            />
                        ))}
                {(positions.positions && links.positions.length > 0) 
                    && positions.positions.map(
                        position => (
                            <TableRow
                                key={position._id} 
                                id={position._id} 
                                title={position.title}
                                stack={position.stack} 
                                color={position.color}
                                responsibilities={position.responsibilities}
                                imageTitle={position.imageTitle}
                                fromDate={position.fromDate}
                                toDate={position.toDate}
                            />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
