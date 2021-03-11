import React, { useState, useEffect } from 'react'
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'
import cv from '../../images/cv.svg'

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
        if(imageTitle.includes('cv')) {
            setLogo(cv)
        }
    }, [])
    return (
        <a href={url} target="_blank" rel="noreferrer"><img src={logo} alt={name}/></a>
    )
}