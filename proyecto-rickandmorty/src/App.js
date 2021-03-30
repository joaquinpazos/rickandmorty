import React from 'react';
import Personaje from './componentes/Personaje';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import RickandMorty from './rickandmorty.json';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Header/>
        </div>
      </header>

      <div>
      {
        RickandMorty.map(function (personajes , idx){
          return(
            <div key= {idx}>
              <Personaje personajes={personajes}/>
            </div> 
          )
        })

      }
      </div>

      <footer>
        <div>
          <Footer/>
        </div>
      </footer>
    </div>
  );
}

export default App;
