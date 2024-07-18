import React from 'react'

// imports the standard the template and content functions for the finances page
import Standard from '../components/standard/Standard'
import FinancesContent from '../components/financesContent/FinancesContent'

// Import image
import creditCards from '../assets/credit-card-types.jpg'

// Displays the finances page
export function Finances() {
    return (
      <div>
        <Standard bgImg={creditCards} text="Finances"/>
        <FinancesContent/>
      </div>
    )
  }