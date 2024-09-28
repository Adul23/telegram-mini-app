import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram'; // Ensure the path is correct

function App() {
    const { onClose, onToggleButton, tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);

    return (
        <div className="App">
            <h1>Welcome to Telegram Web App</h1>
            <button onClick={onToggleButton}>Toggle Main Button</button>
            <button onClick={onClose}>Close</button>
            {tg.user && <p>Hello, {tg.user.first_name}!</p>}
        </div>
    );
}

export default App;
