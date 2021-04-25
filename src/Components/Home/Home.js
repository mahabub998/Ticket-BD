import React from 'react';
import './Home.css';
import { useHistory } from "react-router-dom";

const Home = () => {
    let history = useHistory();
    const handleClick = () => {  
        history.push('/destination');
    };
    return (
        <div className="home-container">
            <div className="container inner-home">
                <div className="card-container">
                    <div className="card" id="card1">
                        <h3>ONE TIME TICKET</h3>
                        <button onClick={handleClick}>BUY NOW</button>
                        <h4>$100</h4>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card" id="card2">
                        <h3>ONE DAY PASS</h3>
                        <button onClick={handleClick}>BUY NOW</button>
                        <h4>$500</h4>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card" id="card3">
                        <h3>MONTHLY PASS</h3>
                        <button onClick={handleClick}>BUY NOW</button>
                        <h4>$1500</h4>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card" id="card4">
                        <h3>ANNUAL PASS</h3>
                        <button onClick={handleClick}>BUY NOW</button>
                        <h4>$9000</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;