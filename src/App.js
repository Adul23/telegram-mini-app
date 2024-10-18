import React from 'react';
import './App.css';
import logo from './components/photos/logo.png'; // If not used, consider removing
import finder from './components/photos/Layer 6.png';
import back from './components/photos/Rectangle 7.png';
import back1 from './components/photos/Rectangle 3886.png';
const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const  
   [password, setPassword] = useState('');  
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here (e.g., send data to server)
      console.log('Form submitted:',  
   { name, surname, email, password });
    };
  
    return (
      <div className="registration-form">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>  
  
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>  
  
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">  
  
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
  
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"  
  
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  };
  
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
                <a href="#" aria-label="Back Navigation">
                    <img src={back} alt="Back Navigation Button" />
                </a>
            </div>
            <div className="back233">
                <a href="#" aria-label="Additional Navigation">
                    <img src={back1} alt="Additional Navigation Button" />
                </a>
            </div>
        </div>
    );
}

export default App;
