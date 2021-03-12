import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClubDetail.css'
import male from '../../images/male.png'
import female from '../../images/female.png'
import twitter from '../../images/social1.png'
import youtube from '../../images/social2.png'
import website from '../../images/social3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faGlobeAmericas, faMapMarker, faTransgender } from '@fortawesome/free-solid-svg-icons'

const ClubDetail = () => {
    const { clubId } = useParams();
    const [clubs, setClubs] = useState([]);
    useEffect(()=> {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`)
        .then(response => response.json())
        .then(data=> setClubs(data.teams[0]))
    }, [])
        console.log(clubs);



    const {strTeamBanner, strGender, strTeamLogo,strCountry, strTeam,strSport, intFormedYear, strStadiumDescription, strDescriptionEN,strTwitter, strYoutube, strFacebook  } = clubs;

    const gender = (strGender === 'female')? female:male;

    return (
        <div>
            <div className="club-detail">
            <img style={{width:"100%"}} src={strTeamBanner} alt="" />
        </div>
      <div className="row container row-style">

            <div className="col-md-4 details breckpiont">
                <h4 style={{letterSpacing:'5px', fontVariant:'small-caps'}} className="setColor"> {strSport}</h4>
                <p className="setColor"><FontAwesomeIcon icon={faFutbol} /> {strTeam}</p>
                <p className="setColor"> <FontAwesomeIcon icon={faMapMarker} /> Founded : {intFormedYear}</p>
                <p className="setColor"><FontAwesomeIcon icon={faGlobeAmericas} /> Country : {strCountry}</p>
                <p className="setColor"><FontAwesomeIcon icon={faTransgender} /> Gender : {strGender}</p>
                 
                
            </div>
            <div className="col-md-4 details">
            <img style={{height:"100px"}} src={strTeamLogo} alt=""/>
            </div>



            <div className="col-md-4 details">
            <img style={{height:"100px", borderRadius:'8px', verticalAlign:'center'}} src={gender} alt=""/>
            </div>

            
      </div>




        <div className="description container">
             <p>{strDescriptionEN}</p>
            <p>{strStadiumDescription}</p>
        </div>

        <div className="social-link">

                <a className="socials" target="_blank"  href={`https://${strFacebook}`}><img src={website} alt=""/></a>
                <a className="socials" target="_blank"  href={`https://${strTwitter}`}> <img src={twitter} alt=""/></a>
                <a className="socials" target="_blank"  href={`https://${strYoutube}`}><img src={youtube} alt=""/></a>
        </div>

        </div>
    )     
};

export default ClubDetail;