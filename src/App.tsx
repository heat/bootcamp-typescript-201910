import React, { useEffect, useState } from 'react';
import './App.scss';
import rnd from 'random';

import { FancyButton } from './components/fancy-button';

const App: React.FC = () => {
  
  const [v, changeV ] = useState(rnd.int(0, 10000));

  const randomizeNewCoffee = () => {
    changeV(rnd.int(0, 1000));
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

              <img src={`https://coffee.alexflipnote.dev/random?v=${v}`} alt="café" className="image coffee" ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot has-background-white">
        <div className="container has-text-centered" >
          <FancyButton onClick={() => randomizeNewCoffee() }></FancyButton>
        </div>
      </div>
    </section>
  );
}

export default App;
