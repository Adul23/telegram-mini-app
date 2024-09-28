import React, {useEffect} from 'react'; 
import './App.css';
import { useTelegram } from 'src/hooks/components/useTelegram.js';

function App() {
  const {onToggleButton, tg} = useTelegram();
  useEffect(() => {
    tg.ready();
    
  }, [])
  
  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>

    </div>
  );
}

export default App;
