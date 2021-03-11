import React, { useState, useEffect } from 'react'
import unicef from '../../images/unicef.svg'
import inra from '../../images/inra.svg'
import essilor from '../../images/essilor.svg'

export default function Project(props) {
    const {name, url, color} = props
    const [logo, setLogo] = useState('')
    useEffect(() => {
        if (name === 'UNICEF') {
            setLogo(unicef)
        }
        if (name === 'INRA') {
            setLogo(inra)
        }
        if (name === 'Essilor') {
            setLogo(essilor)
        }
    }, [])
    return (
        <div className="project">
            <a href={url} className="project__link" target="_blank" rel="noreferrer">
                <div className="project__content" style={{backgroundColor: color}}>
                    {!logo && <span className="project__title">{name}</span>}
                    {logo && <img src={logo} alt="logo"/>}
                </div>
            </a>
        </div>
        
    )
}
