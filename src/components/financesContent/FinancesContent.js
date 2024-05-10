import React from 'react'
import './FinancesContentStyles.css'
import FinancesItems from '../financesItems/FinancesItems'

import VentureX from '../../assets/VentureX.jpeg'
import Bilt from '../../assets/bilt.png'
import Amex from '../../assets/amexGold.jpeg'
import Qatar from '../../assets/qatar.jpg'
import Emirates from '../../assets/emirates.jpg'
import Swiss from '../../assets/swiss.jpg'
import Singapore from '../../assets/singapore.jpeg'

function FinancesContent() {
    return (
        <div className='finances-content'>
            <div className='container'>
                <h4> </h4>
                <p>Optimizing your credit card strategy for travel can save you hundreds of dollars per trip and allow you to experience luxury at a budget! Here are my recommendations for credit cards along with some of the redemptions I have made to achieve maximum value.</p>
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
                <h2>Example Redemptions</h2>
                <hr></hr>
                <h3>Flying to Asia on Qatar Airways QSuite for 90,000 points</h3>
                <div className='vertical-review'>
                    <img src={Qatar} alt="Qatar Airways Business Class"/>
                    <p>Qatar Airways's QSuite business class is quite possibly the best business class in the world. I flew it from Nepal back to New York for only 90,000 credit card points (which is equivalent to $900). The service was absolutely impeccable, and the seat features a lie-flat bed and a door to make the whole seat a small little private cubicle, which was awesome for helping me to sleep. </p>
                    <p>To make this redemption, I transferred 90,000 Capital One Miles from my Venture X to 90,000 British Airways Avios. Qatar Airways and British Airways have a partnership where you can connect your accounts from both airlines and then use the avios on either website. Therefore, I used the avios to book my Qatar Airways flight directly through Qatar Airways's website. Generally when looking for award flight redemption availability, you should either look many months in advance of a trip or last-minute for availability if flying to/from the USA. However if flying between 2 international destinations, there is often times more availbility.</p>
                    <p>Generally, for One-World redemptions, Qatar QSuite and Cathay Pacific Business class are the sweet spots. Many credit cards can transfer to British Airways / Qatar Airways and Cathay Pacific. However, for most other redemptions, you will generally find the Star Alliance to have more options, which we will discuss next! </p>
                </div>
                <hr></hr>
                <h3>19 hours in Singapore Airlines Business Class for 90,000 points</h3>
                <div className='horizontal-review'>
                    <img src={Singapore} alt="Singapore Airlines Business Class"/>
                    <p>The 19 hours and 30 minutes flight from New York to Singapore is the longest flight in the world. I had the privilege of flying this incredible flight in business class on Singapore Airlines for only 90,000 credit card points (equivalent to $900). While the flight is undeniably a slog in terms of duration, being in business class makes this flight a lot more enjoyable, and the service of Singapore Airlines is always great. </p>
                    <p> To make this redemption, I transferred 90,000 American Express Membership Rewards points from my Amex Gold card to Air Canada's Aeroplan program. Since Singapore Airlines and Air Canada are both part of the Star Alliance, I was able to book my Singapore Airlines flight using Air Canada's site. While you could also transfer your credit card points directly to Singapore Airlines's KrisFlyer program, the cost is usually higher if booking directly with the airline (although they do usually offer greater availability). </p>
                </div>
                <hr></hr>
                <h3>Flying to Dubai on Emirates a380 Business Class for 90,000 points</h3>
                <div className='horizontal-review'>
                    <img src={Emirates} alt="Emirates Business"/>
                    <p>Emirates's Business class on the a380 is one of the most icon flight experiences in the world. From the bar at the back of the plane, to the lie-flat seats and caviar, this was one amazing flight. However, if you decide to book Emirates Business Class, beware that only the a380 aircrafts have their signature 1:2:1 configuration seat with direct-aisle access for each seat. The 777 variant's business class is in a 2-3-2 configuration, and is far inferior to their a380 product.</p>
                    <p>To make this redemption, I transferred 90,000 Chase Ultimate Rewards points from my Chase Sapphire Preferred to Air Canada's Aeroplan program. Although Emirates is not part of the Star Alliance, they are partners with Air Canada and therefore you can book Emirates flights using Air Canada. Note that seat availability for award redemptions on Emirates is very limited so your dates need to be flexible if you want to try booking this flight using miles.</p>
                </div>
                <hr></hr>
                <h3>Flying to Europe on Swiss Airlines Business Class for 50,000 points</h3>
                <div className='vertical-review'>
                    <img src={Swiss} alt="Swiss Airlines Business Class"/>
                    <p> While the business class offered by Swiss Airlines isn't as luxurious as products offered by its Middle-Eastern and Asian counterparts, Swiss Airline's business class still offers a lie-flat seat with direct aisle access for most passengers. The food was great and there was the standard open bar and amenity kits offered by almost all airlines in their flagship business class product. </p>
                    <p>The Star Alliance has some great redemptions for flights to Europe through either Air Canada's Aeroplan or Avianca's LifeMiles program. I used Avianca's program to book my flight to Switzerland in business class for only 50,000 points ($500). I would still recommend booking Swiss Airlines's business class despite their relatively average product if you can find a redemption for 50,000 points or less.</p>
                    <p>Generally when booking flights to Europe, your best bet is either book flights more than 4 months in advance or 2 weeks before. Often times the best availability is actually 2 weeks before the trip date, since many airlines release their seats for awards redemption only at this time (ie. United Airlines and Lufthansa). My flight back from Switzerland to New York was on United's Polaris business class, which was booked 2 weeks before the flight. If you have the flexibility (and the risk-tolerance) to book last-minute, you will often find much more options for business class than if you book well in advance. </p>
                </div>
            </div>
        </div>
    )
}

export default FinancesContent