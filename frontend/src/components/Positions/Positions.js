import React, { useEffect } from 'react'
import Position from '../Position/Position'
import { useDispatch, useSelector } from "react-redux"
import { getPositions } from '../../_actions/data'

export default function Positions() {
    const dispatch = useDispatch()
    const positions = useSelector(state => state.data)
    const positionView = useSelector(state => state.positionView)
    useEffect(() => {
        dispatch(getPositions())
    }, [])
    return (
        <div>
        {positionView.positionView}
            {(positions.positions && positions.positions.length > 0) &&
                positions.positions
                    .filter(position => position._id === positionView.positionViewId)
                    .map((filteredPosition, index) =>  (
                        <Position 
                            key={index}
                            title={filteredPosition.title}
                            stack={filteredPosition.stack}
                            responsibilities={filteredPosition.responsibilities}
                            imageTitle={filteredPosition.imageTitle}
                            fromDate={filteredPosition.fromDate}
                            toDate={filteredPosition.toDate}
                        />
                    ))
                }
        </div>
    )
}

                        
