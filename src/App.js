import React from 'react';
import './App.css';
import logo from './components/photos/logo.png';
import finder from './components/photos/Layer 6.png';
import back from './components/photos/Rectangle 7.png';
import back1 from './components/photos/Rectangle 3886.png';
import { Howl, Howler } from 'howler';

function App() {
    return (
        <div className="App">
            {/* Uncomment this if you want to show a greeting */}
            {/* {tg.user && <p>Hello, {tg.initDataUnsafe?.user?.username}!</p>} */}
            <div className="header">
                <div className="catalog">
                    <img src={finder} alt="Finder Icon" />
                </div>
                <div className="nameTeam">
                    <h12>Reactive JStars</h12>
                </div>
            </div>
            <div className="back23">
                <a href="#">
                    <img src={back} alt="Back Navigation" />
                </a>
            </div>
            <div className="back233">
                <a href="#">
                    <img src={back1} alt="Additional Navigation" />
                </a>
            </div>
        </div>
    );
}

export default App;
