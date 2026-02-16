import React from 'react';
import Banner from './page/Home/a/About/Banner/Banner';
import InfoCards from './page/Home/a/About/Info Cards/InfoCards';
import Advocate from './page/Advoctae/Advocate';
import ExpartTeams from './page/Home/a/About/ExpartTeams/ExpartTeams';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Advocate></Advocate>
            <ExpartTeams></ExpartTeams>
        </div>
    );
};

export default Home;