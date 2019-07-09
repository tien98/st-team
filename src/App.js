import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Top from './components/top/top';
import Profile from './components/profile/profile';
import Login from './components/login/login';
<<<<<<< HEAD
import Mess from './components/messenger/mess_left'
=======
import People from './components/people/people';
import Notfound from './components/notfound/Notfound';
>>>>>>> 53935cab93a0d81fee2458e4ac77ea32e5f9325b
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/login" component={Login}></Route>
          <Route path="/" exact component={Login}></Route>
          
          <>
          <Top/>
          <Switch> 
            <Route path="/home" component={Home}></Route>
            <Route path="/profile" component={Profile}></Route>
<<<<<<< HEAD
            <Route path="/mess_left" component={Mess}></Route>
=======
            
            {/* <Route path="/people" component={People}></Route> */}
>>>>>>> 53935cab93a0d81fee2458e4ac77ea32e5f9325b
          </Switch>
          </>
          <Route component={Notfound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
