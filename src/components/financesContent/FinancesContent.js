import React from 'react'
import './FinancesContentStyles.css'
import FinancesItems from '../financesItems/FinancesItems'

import VentureX from '../../assets/VentureX.jpeg'
import Bilt from '../../assets/bilt.png'
import Amex from '../../assets/amexGold.jpeg'

function FinancesContent() {
    return (
        <div className='finances-content'>
            <div className='container'>
                <h4> </h4>
                <p>Optimizing your credit card strategy for travel can save you hundreds of dollars per trip and allow you to experience luxury at a budget! Here are my recommendations for credit cards and some of the ways I have used my credit card points to achieve maximum value.</p>
                <h2>Credit Cards</h2>
                <hr></hr>
                <FinancesItems title="Best Overall: Bilt Mastercard" financesImg={Bilt} text="The Bilt Mastercard is my favorite card in my wallet. It is a no-annual fee card that earns 3X on dining, 2X on travel, and 1x on everything else, including RENT! Even if your landlord doesn't accept credit card, Bilt will provide you with a bank routing and account number to charge your rent towards that is credited to the card. Bilt also boasts the best transfer partners of any credit card, making its points the most valuable in my opinion. Everyone who pays rent should consider getting this card!" pro1="Only credit card that offers points for rent" pro2="Best transfer partners of any card" pro3="No annual fee" con1="No sign-up bonus" con2="Not a great catch-all card" con3="No airport lounge access" />
                <FinancesItems title="Best for Travel: Capital One Venture X" financesImg={VentureX} text="The Capital One Venture X is almost a no-brainer for any person who travels at least once per year. The card earns 5X on travel booked through Capital One's Travel Portal, and 2X on all other purchases. The card comes with a $395 annual fee, but offers a $300 annual travel credit and a 10,000 point bonus every year, which more than offsets that fee. Paired with the Priority Pass lounge access and the ability to transfer points to multiple transfer partners, the Venture X is an easy recommendation for me to anyone who enjoys travelling." pro1="Priority Pass Membership included for all authorized users" pro2="1:1 transfer to multiple partners" pro3="Global Entry or TSA PreCheck credit" con1="Must redeem $300 travel credit on Capital One's Travel Portal" con2="Transfer Partners relatively limited compared to other cards" con3="Points earning for food is limited"/>
                <FinancesItems title="Best for Foodies: American Express Gold" financesImg={Amex} text="The Amex Gold card is great for those whose highest spending category is food. The card has a $250 annual fee, but comes with $120 of Uber/UberEats credit and $120 in GrubHub/Shake Shack credit, which if used fully results in a net cost of only $10. The card earns 4X on food and groceries, 3X on travel, and 1X on all other purchases. The points can be transferred to various transfer partners, or redeemed for only 0.67 cents per point in cash. Those who can use the credits should heavily consider getting this card." pro1="Large sign-up bonus (search for targeted 90,000 point offer using browser incognito mode)" pro2="Great earnings for food and groceries" pro3="Good transfer partners" con1="One sign-up bonus per lifetime" con2="Credits come in $10 increments each month that expire every month" con3="Must get this card before the Amex Platinum to get the sign-up bonus" />
                <h3>Other cards I have:</h3>
                <div className='other-cards'>
                    <li>Chase Sapphire Preferred</li>
                    <li>Chase Freedom Unlimited</li>
                    <li>Alaska Airlines Visa Credit Card</li>
                    <li>Citi Custom Cash</li>
                    <li>Discover It</li>
                </div>
                <hr></hr>
                <h3>Cards I plan on getting (with reason for getting it): </h3>
                <div className='other-cards'>
                    <li>World of Hyatt Card (Hyatt has a great rewards program)</li>
                    <li>American Express Platinum (Get sign-up bonus, then cancel)</li>
                    <li>Citi Premier (To redeem the points from my Citi Custom Cash)</li>
                    <li>United Explorer (Get sign-up bonus, then cancel)</li>
                    <li>Chase Freedom Flex (Sign-up bonus, bonus earning categories)</li>
                    <li>AAdvantage Aviator Red World Elite Mastercard (Get sign-up bonus, then cancel)</li>
                </div>
            </div>
        </div>
    )
}

export default FinancesContent