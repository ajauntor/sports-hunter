import React from 'react';
import './SportsArea.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee,  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SprotsArea = (props) => {
    // console.log(props);
    const {strLeague,strTeam, strCountry, strTeamBadge, idAPIfootball} = props.sport;
    return (
        <div className="container sports-area">
            <img src={strTeamBadge} alt=""/>
            <br/>
            <br/>
            <h2>{strTeam}</h2>
            <h5>{strLeague}</h5>
            <h6>Country : {strCountry}</h6>
            <h6></h6>
            <p><Link to={`/explore/${idAPIfootball}`}>About</Link></p>


            <button type="button" className="btn btn-primary">
                Explore <FontAwesomeIcon icon={faArrowRight} />
            </button>

        </div>
    );
};

export default SprotsArea;