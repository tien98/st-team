import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Top from './components/top/top';
import Profile from './components/profile/profile';
import Login from './components/login/login';
import Mess from './components/messenger/mess_left'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <>
          <Top/>
          <Switch> 
            <Route path="/" exact component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/mess_left" component={Mess}></Route>
          </Switch>
          </>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
