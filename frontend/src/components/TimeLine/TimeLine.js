import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getPositions } from '../../_actions/data'
import TimeLineElement from '../TimeLineElement/TimeLineElement'

export default function TimeLine() {
    const dispatch = useDispatch()
    const [lastWorkDay, setLastWorkDay] = useState()
    const [diffBetweenLastAndFirstWorkDay, setDiffBetweenLastAndFirstWorkDay] = useState()
    const firstWorkDay = new Date(2017, 0, 1)
    const positions = useSelector(state => state.data)
    useEffect(() => {
        dispatch(getPositions())
    }, [])
    useEffect(() => {
        if (positions.positions && positions.positions.length > 0) {
            setLastWorkDay(new Date(Date.parse(positions.positions[positions.positions.length - 1].toDate)))
        }
    }, [positions])
    useEffect(() => {
        setDiffBetweenLastAndFirstWorkDay(Math.ceil((lastWorkDay - firstWorkDay)/(1000*60*60*24)))
    }, [lastWorkDay])
    return (
        <div className="timeline">
            {(positions.positions && positions.positions.length > 0) &&
                positions.positions
                    .map((position, index) => (
                        <TimeLineElement
                            key={index}
                            _id={position._id}
                            workTime={diffBetweenLastAndFirstWorkDay}
                            fromDate={position.fromDate}
                            toDate={position.toDate}
                            title={position.title}
                            color={position.color}
                        />
                    ))}
        </div>
    )
}
