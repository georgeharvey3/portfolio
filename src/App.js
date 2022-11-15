import React from 'react';
import { Route, Switch, withRouter, HashRouter } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';

import Home from './containers/Home/Home';
import PersonalProjects from './containers/Projects/PersonalProjects';
import ProfessionalProjects from './containers/Projects/ProfessionalProjects';
import Contact from './containers/Contact/Contact';
import HanLearn from './containers/Projects/HanLearn/HanLearn';
import GlobalMusic from './containers/Projects/GlobalMusic/GlobalMusic';
import ChinDict from './containers/Projects/ChinDict/ChinDict';
import LangChat from './containers/Projects/LangChat/LangChat';
import CassArt from './containers/Projects/CassArt/CassArt';
import VictoriaHealth from './containers/Projects/VictoriaHealth/VictoriaHealth';
import Kollect from './containers/Projects/Kollect/Kollect';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/projects/hanlearn" component={HanLearn} />
            <Route path="/projects/global-music" component={GlobalMusic} />
            <Route path="/projects/chin-dict" component={ChinDict} />
            <Route path="/projects/langchat" component={LangChat} />
            <Route path="/projects/cass-art" component={CassArt} />
            <Route path="/projects/victoria-health" component={VictoriaHealth} />
            <Route path="/projects/kollect" component={Kollect} />
            <Route path="/contact" component={Contact} />
            <Route path="/professional" component={ProfessionalProjects} />
            <Route path="/personal" component={PersonalProjects} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    </ HashRouter>
  );
}

export default withRouter(App);
