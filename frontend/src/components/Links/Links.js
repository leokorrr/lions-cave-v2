import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getLinks } from '../../_actions/data'
import SocialLink from '../SocialLink/SocialLink'

export default function Links() {
    const links = useSelector(state => state.data)
    const view = useSelector(state => state.view)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLinks())
    }, [view.name])
    return (
        <div className="links">
            {(links.links && links.links.length > 0) &&
                links.links.map(
                    (link, index) => (
                            <div key={index} className="links__link">
                                <SocialLink 
                                    name={link.name} 
                                    url={link.url} 
                                    imageTitle={link.imageTitle}  
                                    />
                            </div>
                        ))}
        </div>
    )
}
