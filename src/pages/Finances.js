import React from 'react'
import Standard from '../components/standard/Standard'
import creditCards from '../assets/credit-card-types.jpg'



export function Finances() {
    return (
      <div>
        <Standard bgImg={creditCards} text="Finances"/>
      </div>
    )
  }