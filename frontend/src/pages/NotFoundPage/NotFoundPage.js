import React from 'react'
import notfound from '../../images/notfound.svg'

function NotFoundPage() {
    return (
        <div className="page page--not-found">
            <img src={notfound} alt=""/>
        </div>
    )
}

export default NotFoundPage