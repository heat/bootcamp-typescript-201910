import React, { useEffect, useState } from 'react';
import './App.scss';
import rnd from 'random';

import axios from 'axios';

import { FancyButton } from './components/fancy-button';
import CoffeeImage from './components/coffe-image';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { randomCoffeeAction } from './store/actions';
import { ThunkDispatch } from 'redux-thunk';


type AppProps = {
  onRandomize: () => void;
}
class App extends React.Component<AppProps> {

  render() {
    const rnd = this.props.onRandomize;

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
                <CoffeeImage />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot has-background-white">
          <div className="container has-text-centered" >
            <FancyButton onAction={() => Promise.resolve(rnd()) } text="ALEATORIO" />
          </div>
        </div>
      </section>
    );
  }
}


const mapDispatchToProps = (dispatch: any) => {

  return {
    onRandomize: () => dispatch(randomCoffeeAction()),
  }
}

const AppContainer = connect(() => {}, mapDispatchToProps)(App);

export default AppContainer;
