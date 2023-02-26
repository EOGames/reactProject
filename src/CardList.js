import React from "react";
import Card from './Card';
import {robots} from './robots';

const CardList = function({robots})
{
    return(
        <div className='cardsHolder'>   
        {cardArray}  
        </div>
    );
}
export default CardList;

const cardArray = robots.map((user,i) =>
{
    return (<Card key={i} id ={robots[i].id} name = {robots[i].name} email ={robots[i].email}/>);

})