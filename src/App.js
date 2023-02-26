import React from "react";
import CardList from "./CardList";
import {robots} from "./robots";
import './index.css';
import SearchBox from './SearchBox';


class App extends React.Component
{
    render()
    {
    return(
        <div>
            <h1 className="center"> Robo Friends</h1>
            <SearchBox />
            <br></br>
            <CardList robots = {robots}/>
        </div>
    );
    }
}
export default App;