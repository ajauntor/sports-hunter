import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import SprotsArea from '../SportsArea/SprotsArea';
import './Home.css'


const Home = () => {
    const [sports, setSports] = useState([]);

    useEffect(()=> {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(response => response.json())
        .then(data => setSports(data.teams))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className='container player-area'>
            {
                sports.map(sport => <SprotsArea sport={sport}></SprotsArea>)
            }
            </div>

        </div>
    );
};

export default Home;