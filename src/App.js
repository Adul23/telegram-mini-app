import React, { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import logo from './components/photos/logo.png'
import finder from './components/photos/Layer 6.png'
import {Howl, Howler} from 'howler';
function App() {
    return (
        
        <div className="App">
{/*             
            {tg.user && <p>Hello, {tg.initDataUnsafe?.user?.username}!</p>} */}
            <div class='header'>
                <div class='catalog'>
                    <img src={finder} alt ="Finder"/>
                </div>
                <div class = 'nameTeam'>
                    <h12>Reactive JStars</h12>
                </div>

            </div>
        </div>
    );
}

export default App;
