import React from "react";
import './index.css'

const Card = function (props) 
{
    return(
        <div className="card">
            <img src={`https://robohash.org/${props.id}?200x200` }alt="robo Pic" />
            <div>
                <h2>{props.name}</h2>                
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Card;