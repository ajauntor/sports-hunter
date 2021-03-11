import React from 'react';
import './SportsArea.css'

const SprotsArea = (props) => {
    // console.log(props);
    const {strLeague, strLeagueAlternate} = props.sport;
    return (
        <div className="container sports-area">
            <h2>{strLeague}</h2>
            <h5>{strLeagueAlternate}</h5>
        </div>
    );
};

export default SprotsArea;