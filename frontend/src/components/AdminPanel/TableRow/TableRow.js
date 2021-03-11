import React from 'react'
import { useSelector } from "react-redux"
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
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
    const classes = useStyles()
    const view = useSelector(state => state.view)
    const handleDelete = () => {
        switch (view.name) {
            case 'projects':
                deleteProjectFromAPI(props.id)
                    .then(() => window.location.reload())
                    .catch(err => console.log(err))
                break
            case 'positions':
                deletePositionFromAPI(props.id)
                    .then(() => window.location.reload())
                    .catch(err => console.log(err))
                break
            case 'links': 
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
                    .map(cell => cell && 
                        (cell[0] === 'stack' || cell[0] === 'responsibilities') 
                            ?
                            (<TableCell className={classes.tableCell} key={cell[0]}>
                                {cell[1].map((cellArrWord, index) => (<span key={index}>{cellArrWord} </span>))}
                            </TableCell>)
                            :
                            (<TableCell className={classes.tableCell} key={cell[0]}>
                                {cell[1]}
                            </TableCell>))
                        }
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