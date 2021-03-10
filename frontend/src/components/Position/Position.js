import React, { useState, useEffect } from 'react'
import PositionHeader from '../PositionHeader/PositionHeader'
import PositionList from '../PositionList/PositionList'
import freelancer from '../../images/freelancer.svg'
import intern from '../../images/intern.svg'
import kaliop from '../../images/kaliop.svg'
import cloudServices from '../../images/cloud-services.svg'

export default function Position(props) {
    const { 
        title,
        stack,
        responsibilities,
        imageTitle,
        fromDate,
        toDate,
        display
    } = props
    const [positionStack, setPositionStack] = useState(stack)
    const [logo, setLogo] = useState()
    useEffect(() => {
        if (imageTitle === 'freelance') {
            setLogo(freelancer)
        }
        if (imageTitle === 'intern') {
            setLogo(intern)
        }
        if (imageTitle === 'kaliop') {
            setLogo(kaliop)
        }
        if (imageTitle === 'cloud-service') {
            setLogo(cloudServices)
        }
    }, [imageTitle])
    return (
        <div className="position">
            <div className="position__col position__img-ctn">
                <img src={logo} alt=""/>
            </div>
            <div className="position__col">
                <div>
                    <PositionHeader 
                        title={title}
                        fromDate={fromDate}
                        toDate={toDate}
                    />
                    <PositionList stack={stack}/>
                    <PositionList responsibilities={responsibilities}/>
                </div>
            </div>
        </div>
    )
}
