import React, { useState } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { useLocation } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import {deleteLinkFromAPI, deleteProjectFromAPI, deletePositionFromAPI} from '../../../_helpers/deleteFromAPI'

const useStyles = makeStyles({
    tableCell: {
        fontSize: '2.4rem',
    },
    button: {
        fontSize: '2.4rem',
        padding: 0
    }
  })
export default function ProjectRow(props) {
    const location = useLocation()
    const classes = useStyles()
    const handleDelete = () => {
        switch (location.pathname) {
            case '/admin-panel/projects':
                deleteProjectFromAPI(props.id)
                    .then(() => window.location.reload())
                    .catch(err => console.log(err))
                break
            case '/admin-panel/positions':
                deletePositionFromAPI(props.id)
                    .then(() => window.location.reload())
                    .catch(err => console.log(err))
                break
            case '/admin-panel/links': 
                deleteLinkFromAPI(props.id)
                    .then(() => window.location.reload())
                    .catch(err => console.log(err))
                break
            default:
                break
        }
    }
    if (props) {
        return (
            <TableRow>
                {Object.entries(props)
                    .map(cell => cell && <TableCell className={classes.tableCell} key={cell[0]}>{cell[1]}</TableCell>)}
                    <TableCell>
                        <Button className={classes.button} color="secondary" disableElevation onClick={handleDelete}>delete</Button>
                    </TableCell>
            </TableRow>
        )
    } else {
        return (
            <TableRow>No data</TableRow>
        )
    }
}