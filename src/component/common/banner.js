import React from 'react'

export const Banner = () => {
    return (
        <div className="cform__content__wrapper" >
            <div className="cform__content" style={{
                backgroundImage: `url('images/oref_hp_bg.png')`,
                objectFit: 'contain'
            }}>
                <ul>
                    <li><a href="">Update personal detail</a></li>
                    <li><a href="">Opening a new portfolio</a></li>
                    <li><a href="">My bags</a></li>
                </ul>
            </div>

        </div>
    )
}
