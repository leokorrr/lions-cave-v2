import React, { useEffect, useState } from 'react'
// import { useDispatch } from "react-redux"
import { getPositionsFromAPI } from '../../../_services/data.service'
import TableRow from '../TableRow/TableRow'
import PositionsTableHead from '../PositionsTableHead/PositionsTableHead'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

export default function PositionsTable() {
    const [positions, setPositions] = useState([])
    useEffect(() => {
        getPositionsFromAPI()
            .then(res => {
                setPositions(res.data)
            })
    }, [])
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <PositionsTableHead />
                </TableHead>
                <TableBody>
                    {positions.map(
                        position => (
                            <TableRow
                                key={position._id} 
                                title={position.title} 
                                stack={position.stack}
                                responsibilities={position.responsibilities}
                                imageTitle={position.imageTitle}
                                fromDate={position.fromDate}
                                toDate={position.toDate}
                                />))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
