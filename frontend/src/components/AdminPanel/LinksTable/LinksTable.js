import React, { useEffect, useState } from 'react'
import { getLinksFromAPI } from '../../../_services/data.service'
import TableRow from '../TableRow/TableRow'
import LinksTableHead from '../LinksTableHead/LinksTableHead'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

export default function PositionsTable() {
    const [links, setLinks] = useState([])
    useEffect(() => {
        getLinksFromAPI()
            .then(res => {
                setLinks(res.data)
            })
    }, [])
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <LinksTableHead />
                </TableHead>
                <TableBody>
                    {links.reverse().map(
                        link => (
                            <TableRow
                                key={link._id}
                                id={link._id} 
                                name={link.name} 
                                url={link.url}
                                image={link.imageTitle}
                                />))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
