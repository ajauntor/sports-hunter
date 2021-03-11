import React from 'react';
import './SportsArea.css'

const SprotsArea = (props) => {
    // console.log(props);
    const {strLeague,strTeam, strCountry} = props.sport;
    return (
        <div className="container sports-area">
            <h2>{strTeam}</h2>
            <h5>{strLeague}</h5>
            <h6>Country : {strCountry}</h6>

        </div>
    );
};

export default SprotsArea;