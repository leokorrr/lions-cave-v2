import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setPositionView } from '../../_actions/positionView'

export default function TimeLineElement(props) {
    const { 
        fromDate,
        toDate,
        title,
        workTime,
        color,
        _id
    } = props
    const [workTimeInPercent, setWorkTimeInPercent] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        const diffTime = Math.abs(Date.parse(toDate) - Date.parse(fromDate))
        const diffDays = Math.ceil(diffTime / (1000*60*60*24))
        setWorkTimeInPercent(Math.round(diffDays*100/workTime))
    }, [workTime])
    const handleViewChange = (e, id) => {
        e.preventDefault()
        dispatch(setPositionView(id))
    }
    return (
        <div className="timeline-element" onClick={(e)=>handleViewChange(e, _id)}  style={{width: `${workTimeInPercent}%`}}>
            <div 
                className="timeline-element__line"
                style={{backgroundColor: color}}
            ></div>
            <div className="timeline-element__point" style={{borderColor: color}}></div>
            <div className="timeline-element__title">
                {title.split(" at")[0]}
            </div>
        </div>
        
    )
}
