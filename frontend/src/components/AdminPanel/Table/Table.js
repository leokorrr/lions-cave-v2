import React, { useEffect, useState } from 'react'
// import { useDispatch } from "react-redux"
import { getTableData } from '../../../_helpers/getTableData'
import TableRow from '../TableRow/TableRow'
import PositionsTableHead from '../PositionsTableHead/PositionsTableHead'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

export default function TableGenerator(props) {
    const [tableContent, setTableContent] = useState([])
    const {view} = props
    console.log(view)
    useEffect(() => {
        getTableData(view)
            .then(res => {
                setTableContent(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <PositionsTableHead />
                </TableHead>
                <TableBody>
                    {/* <TableRow {...tableContent.clone()}></TableRow> */}
                    {tableContent.map((index, rowContent) => {
                        return <TableRow {...rowContent.clone()} key={index} />
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
