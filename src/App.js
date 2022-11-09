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
import LangChat from './containers/Projects/LangChat/LangChat';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/portfolio/projects/hanlearn" component={HanLearn} />
            <Route path="/portfolio/projects/global-music" component={GlobalMusic} />
            <Route path="/portfolio/projects/chin-dict" component={ChinDict} />
            <Route path="/portfolio/projects/langchat" component={LangChat} />
            <Route path="/portfolio/contact" component={Contact} />
            <Route path="/portfolio/projects" component={Projects} />
            <Route path="/portfolio/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    </ HashRouter>
  );
}

export default withRouter(App);
