import React from 'react';
import { Route, Switch, withRouter, HashRouter } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';

import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import HanLearn from './containers/Projects/HanLearn/HanLearn';
import GlobalMusic from './containers/Projects/GlobalMusic/GlobalMusic';
import ChinDict from './containers/Projects/ChinDict/ChinDict';
import MealSelector from './containers/Projects/MealSelector/MealSelector';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/projects/hanlearn" component={HanLearn} />
            <Route path="/projects/global-music" component={GlobalMusic} />
            <Route path="/projects/chin-dict" component={ChinDict} />
            <Route path="/projects/meal-selector" component={MealSelector} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    </ HashRouter>
  );
}

export default withRouter(App);
