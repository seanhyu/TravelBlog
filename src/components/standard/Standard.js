import React from 'react'

import './StandardStyles.css'

function Standard ({bgImg,text}) {
    return (
        <div className='standard'>
            <img src={bgImg} alt = "/" />
            <div className='overlay'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Standard

