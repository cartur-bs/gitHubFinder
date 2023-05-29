

import { useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState('');
  const [userName, setUserName] = useState('');



  const handleUser = () => {
    fetch(`https://api.github.com/users`)
      .then(async res => {
        const data = await res.json();
        console.log(data);

        data.map(i => {
          setUserName(i.login);
        })
        console.log(userName)
      })

  }


  return (
    <div className="App">
      <div className="container">
        <header className="header-top">
          <ul>
            <li>Jovem Programador</li>
          </ul>
        </header>
        <main>
          <div className="form">
            <h1>Buscador de Perfis do GITHUB</h1>
            <input
              type="text"
              placeholder="Digite um username"
              onChange={(e) => setUser(e.target.value)}
            />
            <button onClick={handleUser}>Buscar</button>
          </div>
          <div className="content">
            <div>
              <img src="*" alt="" />
              <h1>teste</h1>
              <p>teste</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
