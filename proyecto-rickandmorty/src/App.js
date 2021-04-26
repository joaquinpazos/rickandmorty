import React from 'react';
import Personaje from './componentes/Personaje';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import RickandMorty from './rickandmorty.json';

function App() {
  //console.log(RickandMorty);
  return (
    <div className="App">
      <header className='Header'>
          <Header/>
      </header>

      <div className='contenedor'>
      {
        RickandMorty.map(function (personaje , idx){
          return(
            <div key= {idx}>
              <Personaje personaje={personaje}/>
            </div> 
          )
        })

      }
      </div>

      <footer className='Footer'>
        <div>
          <Footer/>
        </div>
      </footer>
    </div>
  );
}

export default App;
