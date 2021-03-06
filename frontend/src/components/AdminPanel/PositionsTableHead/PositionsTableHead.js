import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    tableCell: {
        fontSize: '2.4rem',
        fontWeight: 'bold'
    }
})
export default function ProjectTableHead() {
    const classes = useStyles()
    return (
        <TableRow>
            <TableCell className={classes.tableCell}>ID</TableCell>
            <TableCell className={classes.tableCell}>Title</TableCell>
            <TableCell className={classes.tableCell}>Stack</TableCell>
            <TableCell className={classes.tableCell}>Responsibilities</TableCell>
            <TableCell className={classes.tableCell}>Image</TableCell>
            <TableCell className={classes.tableCell}>From Date:</TableCell>
            <TableCell className={classes.tableCell}>To Date:</TableCell>
            <TableCell className={classes.tableCell}>Action</TableCell>
        </TableRow>
    )
}
