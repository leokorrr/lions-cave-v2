import React, {useState, useEffect} from 'react'

export default function PositionHeader(props) {
    const [fromMonth, setFromMonth] = useState()
    const [toMonth, setToMonth] = useState()
    const [fromYear, setFromYear] = useState()
    const [toYear, setToYear] = useState()
    const { 
        title,
        fromDate,
        toDate
    } = props
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    useEffect(() => {
        setFromMonth(monthNames[new Date(Date.parse(fromDate)).getMonth()])
        setToMonth(monthNames[new Date(Date.parse(toDate)).getMonth()])
        setFromYear(new Date(Date.parse(fromDate)).getFullYear())
        setToYear(new Date(Date.parse(toDate)).getFullYear())
    }, [])
    useEffect(() => {
        setFromMonth(monthNames[new Date(Date.parse(fromDate)).getMonth()])
        setToMonth(monthNames[new Date(Date.parse(toDate)).getMonth()])
        setFromYear(new Date(Date.parse(fromDate)).getFullYear())
        setToYear(new Date(Date.parse(toDate)).getFullYear())
    }, [fromDate, toDate])
    return (
        <div className="position-header">
            <div className="position-header__title">{title}</div>
            <div className="position-header__time">({fromMonth} {fromYear} - {toMonth} {toYear})</div>
        </div>
    )
}
