import React, { useEffect } from 'react';
import { getPresets } from './actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Incrementer from './components/Incrementer';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Err from './components/Err';
import Info from './components/Info';
import Index from './components/Index';
import Form from './components/Form';

function App(props) {
  useEffect(() => {
    props.getPresets();
  });

  if (props.loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/index" component={Index} />
        <Route exact path="/index/new" component={Form} />
        <Route component={Err} />
      </Switch>
      <Footer />
      <Incrementer />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { getPresets })(App);
