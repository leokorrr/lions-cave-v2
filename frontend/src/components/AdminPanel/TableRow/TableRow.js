import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {deleteLinkFromAPI, deleteProjectFromAPI, deletePositionFromAPI} from '../../../_helpers/deleteFromAPI'

export default function ProjectRow(props) {
    const handleDelete = () => {
        if (props.type && props.type !== '') {
            deleteProjectFromAPI(props.id)
                .then(() => {
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err)
                })
        } else if (props.title && props.title !==  '') {
            deletePositionFromAPI(props.id)
                .then(() => {
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            deleteLinkFromAPI(props.id)
                .then(() => {
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    if (props) {
        return (
            <TableRow>
                {Object.entries(props)
                    .map(cell => cell && <TableCell key={cell[0]}>{cell[1]}</TableCell>)}
                    <TableCell><button onClick={handleDelete}>XXX</button></TableCell>
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