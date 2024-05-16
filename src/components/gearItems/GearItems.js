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
                    <li>{props.pro1}</li>
                    <li>{props.pro2}</li>
                    <li>{props.pro3}</li>
                    </p>
                </div>
                <div className='cons'>
                    <h4>Cons</h4>
                    <p>
                    <li>{props.con1}</li>
                    <li>{props.con2}</li>
                    <li>{props.con3}</li>
                    </p>
                </div>
            </div>
            <hr></hr>
                
            </div>
    )
}

export default GearItems