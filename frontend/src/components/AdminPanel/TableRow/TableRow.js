import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function ProjectRow(props) {
    if (props) {
        return (
            <TableRow>
                {Object.entries(props)
                    .map(cell => cell && <TableCell key={cell[0]}>{cell[1]}</TableCell>)}
            </TableRow>
        )
    } else {
        return (
            <TableRow>
                No data
            </TableRow>
        )
    }
}