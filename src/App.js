import logo from './logo.svg';
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';

import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import HanLearn from './containers/Projects/HanLearn/HanLearn';
import GlobalMusic from './containers/Projects/GlobalMusic/GlobalMusic';
import CharacterDecomposer from './containers/Projects/CharacterDecomposer/CharacterDecomposer';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/projects/hanlearn" component={HanLearn} />
          <Route path="/projects/global-music" component={GlobalMusic} />
          <Route path="/projects/character-decomposer" component={CharacterDecomposer} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
