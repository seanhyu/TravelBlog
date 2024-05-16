import React from "react"

import './FinancesItemsStyles.css'

function FinancesItems(props) {
    return (
        <div className='finances-items'>
            <h3>{props.title}</h3>
            <div className='finances-grid'>
                <img src={props.financesImg} alt = 'credit card' />
                <div className='span-2-col'>
                    <p>{props.text}</p>
                </div>
                <div className='pros'>
                    <h4>Pros</h4>
                    <li>{props.pro1}</li>
                    <li>{props.pro2}</li>
                    <li>{props.pro3}</li>
                </div>
                <div className='cons'>
                    <h4>Cons</h4>
                    <li>{props.con1}</li>
                    <li>{props.con2}</li>
                    <li>{props.con3}</li>
                </div>
            </div>
            <hr></hr>
                
            </div>
    )
}

export default FinancesItems