import React from 'react'
import Standard from '../components/standard/Standard'
import creditCards from '../assets/credit-card-types.jpg'
import FinancesContent from '../components/financesContent/FinancesContent'



export function Finances() {
    return (
      <div>
        <Standard bgImg={creditCards} text="Finances"/>
        <FinancesContent/>
      </div>
    )
  }