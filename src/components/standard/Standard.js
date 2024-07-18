import React from 'react'

import './StandardStyles.css'

// Displays the standard template with the image and page title found on the top of all pages except the home page
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

