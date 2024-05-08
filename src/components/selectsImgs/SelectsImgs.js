import React from 'react'
import './SelectsImgsStyles.css'

function SelectsImg(props) {
    return (
        <div className='selects-location'>
            <img src={props.bgImg} alt = "/" />
            <div className='overlay'>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default SelectsImg