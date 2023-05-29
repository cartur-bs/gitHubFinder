
import './App.css';

function App() {



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
            />
            <button >Buscar</button>
          </div>
          <div className="content">
            <div>
              <img src='https://github/users/cartur-bs.png' alt="Perfil" />
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
