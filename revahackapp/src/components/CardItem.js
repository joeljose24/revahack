import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <>
        <li className="card__item">
            <Link className="cards__item__link" to={props.path}>
                <figure className="card__item__pic-wrap">
                    <img src={props.src} alt="Travel Image"
                    className="cards__item__img"/>
                </figure>
                <div className="cards_item_info">
                    <h5 className="cards__item__text"> {props.text}
                    </h5>
                </div>
            </Link>
        </li>
            
        </>
    )
}

export default CardItem
