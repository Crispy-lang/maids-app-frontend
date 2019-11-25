import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Homepage/Header';
import Boxes from './Components/Homepage/Boxes';
import Intro from './Components/Homepage/Intro';
import Footer from './Components/Homepage/Footer';
import HeaderSignin from '../Apps/Components/Signin/Header';
import BodySignin from '../Apps/Components/Signin/Body';
import FooterSignin from '../Apps/Components/Signin/Footer';
import HeaderSignup from '../Apps/Components/signup/Header';
import BodySignup from './Components/signup/Body';
import FooterSignup from './Components/signup/Footer';
import '../css/index.css';
import '../css/style.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render= {() => (
          <React.Fragment>
            <Header />
            <Intro />
            <Boxes />
            <Footer />
          </React.Fragment>
        )} />
        <Route exact path="/signin" render={() => (
          <React.Fragment>
            <HeaderSignin />
            <BodySignin />
            <FooterSignin />
          </React.Fragment>
        )} />
        <Route exact path="/signup" render={() => (
          <React.Fragment>
            <HeaderSignup />
            <BodySignup />
            <FooterSignup />
          </React.Fragment>
        )} />
      </Router>
    );
  }
}

export default App;
