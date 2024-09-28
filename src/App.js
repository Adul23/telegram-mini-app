import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram'; // Ensure the path is correct

function App() {
    const { onClose, onToggleButton, onClicker, tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);
    const [number, setNumber] = useState(0);
    
    return (
        <div className="App">
            <h1>Welcome to Telegram Web App</h1>
            <button onClick={onToggleButton}>Toggle Main Button</button>
            <button onClick={onClicker(number)}>Clicker number: {number}</button>
            <button onClick={onClose}>Close</button>
            {tg.user && <p>Hello, {tg.initDataUnsafe?.user?.username}!</p>}
        </div>
    );
}

export default App;
