import React from 'react'
import TimeLine from '../../components/TimeLine/TimeLine'
import Positions from '../../components/Positions/Positions'
import Links from '../../components/Links/Links'

function PositionsPage() {
    return (
        <div className="page page--positions">
            <div className="page__content">
                <TimeLine />
                <Positions />
            </div>
            <Links/>
        </div>
    )
}

export default PositionsPage