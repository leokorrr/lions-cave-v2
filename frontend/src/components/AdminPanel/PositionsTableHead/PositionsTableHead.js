import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function ProjectTableHead() {
    return (
        <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Stack</TableCell>
            <TableCell>Responsibilities</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>From Date:</TableCell>
            <TableCell>To Date:</TableCell>
        </TableRow>
    )
}
