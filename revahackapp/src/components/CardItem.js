import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem(props) {
  return (
    <Link className="" to={props.path}>
      <div className="container card_outer">
        <div className="row">
          <div className="col">
            <h5 className=""> {props.business_name}</h5>
          </div>
          <figure className="col order-last">
            <img src={props.src} alt="Travel" className="img" />
          </figure>
        </div>
        <div className="row">
            <p className="col-3">{props.business_tags}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardItem;
