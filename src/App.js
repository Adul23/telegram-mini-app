import React, { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {
    const { onClose, onToggleButton, tg } = useTelegram();
    const [number, setNumber] = useState(0);

    useEffect(() => {
        tg.ready();
        const savedNumber = localStorage.getItem('clickCount');
        if (savedNumber) {
            setNumber(Number(savedNumber)); 
        }
    }, [tg]);

    const onClicker = () => {
        console.log(tg.initDataUnsafe?.user?.username);
        const newNumber = number + 1;
        setNumber(newNumber); 
        localStorage.setItem('clickCount', newNumber); 
    };

    return (
        <div className="App">
            <h1>Welcome to Telegram Web App</h1>
            <button onClick={onToggleButton}>Toggle Main Button</button>
            <button onClick={onClicker}>Click me! {number}</button>
            <button onClick={onClose}>Close</button>
            {tg.user && <p>Hello, {tg.initDataUnsafe?.user?.username}!</p>}
        </div>
    );
}

export default App;
