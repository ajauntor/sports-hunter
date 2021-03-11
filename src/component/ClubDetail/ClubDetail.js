import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClubDetail.css'
import male from '../../images/male.png'
import female from '../../images/female.png'

const ClubDetail = () => {
    const { clubId } = useParams();
    const [clubs, setClubs] = useState([]);
    useEffect(()=> {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`)
        .then(response => response.json())
        .then(data=> setClubs(data.teams[0]))
    }, [])
        console.log(clubs);



    const {strTeamBanner, strGender, strTeamBadge, } = clubs;
    const gender = (strGender === 'female')? female:male;

    return (
        <div>
            <div className="club-detail">
            <img style={{width:"100%"}} src={strTeamBanner} alt="" />
        </div>
      <div className="row">
            <div className="col-md-4">
                <h5>Premier League</h5>
               
            </div>
            <div className="col-md-4">
                <img style={{width:"100px"}} src={strTeamBadge} alt=""/>
            </div>

            <div className="col-md-4">
            <img style={{height:"100px"}} src={gender} alt=""/>
            </div>
      </div>
        </div>
    )     
};

export default ClubDetail;