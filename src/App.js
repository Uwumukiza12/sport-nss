import React from 'react';
import Home from './Components/pages/Home';
// import ReactDom from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Football from './Components/pages/sports/Football';
import Basketball from './Components/pages/sports/Basketball';
import Header from './Components/header';
import Navbar from './Components/pages/sports/Navbar';
import SportsHeader from './Components/pages/sports/SportsHeader';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">


      <Router>
        <Header />
        <Navbar />
        <SportsHeader />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Football" component={Football} />
          <Route path="/Basketball" component={Basketball} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
