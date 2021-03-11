import React, { useEffect } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    tableCell: {
        fontSize: '2.4rem',
        fontWeight: 'bold'
    }
})
export default function ProjectTableHead(props) {
    const {fields} = props
    const classes = useStyles()
    useEffect(()=> {
    }, [])
    return (
        <TableRow>
            <TableCell className={classes.tableCell}>_ID</TableCell>
            {fields.map((field, index) => (<TableCell key={index} className={classes.tableCell}>{field.charAt(0).toUpperCase() + field.slice(1)}</TableCell>))}
            <TableCell className={classes.tableCell}>Action</TableCell>
        </TableRow>
    )
}
