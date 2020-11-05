import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem(props) {
  return (
    <Link className="" to={props.path}>
      <div className="card_outer">
          <div className="">
            <h5 className=""> {props.business_name}</h5>
          </div>
          <figure className="">
            <img src={props.src} alt="Travel" className="img" />
          </figure>
            <p className="col-3">{props.business_tags}</p>
      </div>
    </Link>
  );
}

export default CardItem;
