import React from 'react'
import './SelectsImgsStyles.css'
import {Link} from 'react-router-dom'


function SelectsImg(props) {
    return (
        <div className='selects-location'>
            <Link to={props.link}>
            <img src={props.bgImg} alt = "/" />
            <div className='overlay'>
                <h3>{props.text}</h3>
            </div>
            </Link>
        </div>
    )
}

export default SelectsImg