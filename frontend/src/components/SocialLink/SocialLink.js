import React, { useState, useEffect } from 'react'
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'

export default function SocialLink(props) {
    const {url, name, imageTitle} = props
    const [logo, setLogo] = useState()
    useEffect(() => {
        if (imageTitle.includes('github')) {
            setLogo(github)
        }
        if (imageTitle.includes('linkedin')) {
            setLogo(linkedin)
        }
    }, [])
    return (
        <a href={props.url} target="_blank"><img src={logo} alt=""/></a>
    )
}