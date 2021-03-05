import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function ProjectTableHead() {
    return (
        <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Image</TableCell>
        </TableRow>
    )
}
