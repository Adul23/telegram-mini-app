import React, { useState } from 'react';
import './App.css';


  
function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here (e.g., send data to server)
      console.log('Form submitted:', { name, surname, email, password });
  };

  // return (
  //     <div className="registration-form">
  //         <h2>Registration</h2>
  //         <form onSubmit={handleSubmit}>
  //             <div className="form-group">
  //                 <label htmlFor="name">Name</label>
  //                 <input
  //                     type="text"
  //                     id="name"
  //                     value={name}
  //                     onChange={(e) => setName(e.target.value)}
  //                     required
  //                 />
  //             </div>
  //             <div className="form-group">
  //                 <label htmlFor="surname">Surname</label>
  //                 <input
  //                     type="text"
  //                     id="surname"
  //                     value={surname}
  //                     onChange={(e) => setSurname(e.target.value)}
  //                     required
  //                 />
  //             </div>
  //             <div className="form-group">
  //                 <label htmlFor="email">Email</label>
  //                 <input
  //                     type="email"
  //                     id="email"
  //                     value={email}
  //                     onChange={(e) => setEmail(e.target.value)}
  //                     required
  //                 />
  //             </div>
  //             <div className="form-group">
  //                 <label htmlFor="password">Password</label>
  //                 <input
  //                     type="password"
  //                     id="password"
  //                     value={password}
  //                     onChange={(e) => setPassword(e.target.value)}
  //                     required
  //                 />
  //             </div>
  //             <button type="submit">Sign up</button>
  //         </form>
  //     </div>
  // );
    return (
        <div className="App">
            {/* {tg.user && <p>Hello, {tg.initDataUnsafe?.user?.username}!</p>} */}
            <div className="header">
                <div className="catalog">
                    <div className='palka'></div>
                    <div className='palka'></div>
                    <div className='palka'></div>
                </div>
                <div className="nameTeam">
                    <h12>Reactive JStars</h12>
                </div>
            </div>
            <button type="back" className='buttonBack'>--</button>

            
            <div className="back23">
            
            </div>
            <div className="back233">
            
              <div className="someText">
                    <h3>Registration</h3>
                    
                  </div>
              
              
              <div className ='somecontainer'>
                <div className = "textName">
                    Name
                    
                  </div>
                  <input className="Name"
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      
                      required
                  />
                <div className = 'pole'>

                  </div>
                  <div className = "textName">
                    Surname
                    
                  </div>
                  <input className="Surname"
                      type="text"
                      id="surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      required
                  />
                  <div className = 'pole'>

                  </div>
                  <div className = "textName">
                    Email
                    
                  </div>
                  <input className="Email1"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
                  <div className = 'pole'/>
                  <div className = "textName">
                    Password
                  </div>
                  <input className='Password1'
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  />
                  <div className = 'pole'/>
              </div>
              
            </div>
            <button type="submit" className='buttonSubmit'>Sign up</button>
            
        </div>
    );
}

export default App;
