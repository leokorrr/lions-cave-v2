import React from 'react'
import TimeLine from '../../components/TimeLine/TimeLine'
import Positions from '../../components/Positions/Positions'

function PositionsPage() {
    return (
        <div className="page page--positions">
            <TimeLine />
            <Positions />
        </div>
    )
}

export default PositionsPage