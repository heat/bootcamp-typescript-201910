import React, { useEffect, useState } from 'react';
import './App.scss';
import rnd from 'random';

import axios from 'axios';

import { FancyButton } from './components/fancy-button';

function requestCheck( arg: any): arg is CoffeeShop.CoffeeApiResponse {
  if (!arg) {
    return false;
  }
  if (arg.file) {
    return true;
  }
  return false;
}
const App: React.FC = () => {
  
  const [v, changeV ] = useState('https://coffee.alexflipnote.dev/random');

  const coffeeRand = async () => {
    const res = await axios.get<CoffeeShop.CoffeeApiResponse | {} | null>('http://localhost:3000/random.json');
    const newcoffee = res.data;

    if (requestCheck(newcoffee)) {

      changeV(newcoffee.file);
    } else {
      
      throw new Error(`${res.statusText} - falha na requisicao`);
    }
  };

  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <div className="navbar-item">
                <img src="https://i.imgur.com/rw7iRFF.png" alt="Logo" />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">

              <img src={v} alt="café" className="image coffee" ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot has-background-white">
        <div className="container has-text-centered" >
          <FancyButton onAction={() => coffeeRand() } text="ALEATORIO" />
        </div>
      </div>
    </section>
  );
}

export default App;
