import React, { useEffect, useState } from 'react'
import PositionsListElement from '../PositionListElement/PositionListElement'

export default function PositionList(props) {
    const {
        stack,
        responsibilities
    } = props
    const [listElements, setListElements] = useState([])
    useEffect(() => {
        stack ? setListElements(stack) : setListElements(responsibilities)
    }, [])
    useEffect(() => {
        stack ? setListElements(stack) : setListElements(responsibilities)
    }, [stack, responsibilities])
    return (
        <div className="position-list">
            {stack && <h3 className="position-list__header">Stack</h3>}
            {responsibilities && <h3 className="position-list__header">Responsibilities</h3>}
            
            <ul className="position-list__list">
                {listElements.map((listElement, index) => (
                    <PositionsListElement key={index} listElement={listElement.replace(/\\/g, " ")}/>
                ))}
            </ul>
        </div>
        
    )
}
