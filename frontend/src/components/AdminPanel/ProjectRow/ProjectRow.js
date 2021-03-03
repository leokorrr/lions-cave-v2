import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function ProjectRow(props) {
    const { name, type, url, projectColor} = props
    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{url}</TableCell>
            <TableCell>{projectColor}</TableCell>
        </TableRow>
    )
}
