
import { useState } from 'react';
import './App.css';

function App() {

  const [userName, setUserName] = useState('');
  const [name, setName] = useState('Nome');
  const [avatar, setAvatar] = useState('https://encurtador.com.br/hmCPU');
  const [bio, setBio] = useState('biografia');


  const handleUser = () => {
    setName('Carregando...');
    setBio('Carregando...');
    setAvatar('https://encurtador.com.br/hmCPU');
    fetch(`https://api.github.com/users/${userName}`)
      .then(async res => {
        const data = await res.json();
        setAvatar(data.avatar_url);
        setBio(data.bio);
        setName(data.name);
      })
  }

  const handleLimpaUser = () => {
    setAvatar('https://encurtador.com.br/hmCPU');
    setBio('biografia');
    setName('Nome');
  } 

  return (
    <div className="App">
      <div className="container">
        <main>
          <div className="form">
            <h1>Qual programador você deseja encontrar?</h1>
            <div className='campoDeBusca'>
              <input
                type="text"
                placeholder="Digite um username"
                onChange={(e) => setUserName(e.target.value)}
              />
              <div className="divBotoes">
                <button onClick={handleUser}>Buscar</button>
                <button onClick={handleLimpaUser}>Limpar</button>
              </div>

            </div>

          </div>
          <div className="content">
            <div>
              <img src={avatar} alt="" />
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
