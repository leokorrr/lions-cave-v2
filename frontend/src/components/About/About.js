import React from 'react'
import leon from '../../images/leon.jpg'

export default function About() {
    return (
        <div className="about">
            <div className="about__col">
                <div className="about__tag about__tag--sm about__tag--welcome-phrase">Hi, my name is <br/> <span className="about__name">Leo</span></div>
                <div className="about__tag about__tag--sm about__tag--melomaniac">Melomaniac</div>
                <div className="about__tag about__tag--sm about__tag--stack">MERN stack</div>
                <div className="about__tag about__tag--sm about__tag--living">Living in Poland</div>
                <div className="about__tag about__tag--sm about__tag--origin">Belarus origin</div>
                <div className="about__tag about__tag--sm about__tag--citizen">Citizen of the world</div>
                <div className="about__tag about__tag--md about__tag--web-dev">Web developer</div>
                <div className="about__tag about__tag--lg about__tag--designer">Designer</div>
            </div>
            <div className="about__col">
                <div className="about__img-ctn">
                    <img src={leon} alt="leon-photo"/>
                </div>
            </div>
        </div>
    )
}
