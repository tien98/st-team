import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Top from './components/top/top';
import Profile from './components/profile/profile';
import Login from './components/login/login';
import People from './components/people/people';
import Notfound from './components/notfound/Notfound';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/login" component={Login}></Route>
          <Route path="/" exact component={Login}></Route>
          
          <>
          <Top />
          <Switch> 
            <Route path="/home" component={Home}></Route>
            <Route path="/profile" component={Profile}></Route>
            
            {/* <Route path="/people" component={People}></Route> */}
          </Switch>
          </>
          <Route component={Notfound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
