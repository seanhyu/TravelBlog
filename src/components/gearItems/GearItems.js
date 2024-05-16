import React from "react"

import './GearItemsStyles.css'

function GearItems(props) {
    return (
        <div className='gear-items'>
            <h3>{props.title}</h3>
            <div className='gear-grid'>
                <img src={props.gearImg} alt = 'gear' />
                <div className='span-2-col'>
                    <p>{props.text}</p>
                </div>
                <div className='pros'>
                    <h4>Pros</h4>
                    <p>
                    <li><p>{props.pro1}</p></li>
                    <li><p>{props.pro2}</p></li>
                    <li><p>{props.pro3}</p></li>
                    </p>
                </div>
                <div className='cons'>
                    <h4>Cons</h4>
                    <li><p>{props.con1}</p></li>
                    <li><p>{props.con2}</p></li>
                    <li><p>{props.con3}</p></li>
                </div>
            </div>
            <hr></hr>
                
            </div>
    )
}

export default GearItems