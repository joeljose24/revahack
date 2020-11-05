import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
    return (
        <div className=''>
            <h1>
                Check out these EPIC BUSINESS VENTURES!
            </h1>
            <div className="">
                <div className="">
                        <CardItem className="card_size"
                        src="images/img1.jpg"
                        business_name="This is dummy data"
                        business_tags="tag1 tag2 tag3"
                        label='Label'
                        path='./services'
                        />
                        <CardItem 
                        src="images/img1.jpg"
                        business_name="This is dummy data"
                        business_tags="tag1 tag2 tag3"
                        label='Label'
                        path='./services'
                        />
                         <CardItem 
                        src="images/img1.jpg"
                        business_name="This is dummy data"
                        business_tags="tag1 tag2 tag3"
                        label='Label'
                        path='./services'
                        />
                         <CardItem 
                        src="images/img1.jpg"
                        business_name="This is dummy data"
                        business_tags="tag1 tag2 tag3"
                        label='Label'
                        path='./services'
                        />
                </div>
            </div>
            
        </div>
    )
}

export default Cards
