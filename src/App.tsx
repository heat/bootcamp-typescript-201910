import React from 'react';
import './App.scss';

const App: React.FC = () => {
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

              <img src="https://coffee.alexflipnote.dev/random" alt="café" className="image coffee" ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot has-background-white">
        <div className="container has-text-centered" >
            <button className="button"> RANDOMIZAR </button>
        </div>
      </div>
    </section>
  );
}

export default App;
