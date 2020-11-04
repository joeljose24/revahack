import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>
                Check out these EPIC BUSINESS VENTURES!
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img1.jpg"
                        text="This is dummy data"
                        label='Label'
                        path='./services'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
