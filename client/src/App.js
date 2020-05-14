import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile'
import Inbox from './components/Inbox/Inbox';
import Assignments from './components/Assignments/Assignments';
import './App.css';

const Main = () => {
  return ( 
    <div>
      <div>
        <Header/>
        <Nav/>
      </div>
      <div className="container">
        <div className="content">
          <Router>
            <Route path='/home/profile'>
              <Profile/>
            </Route>
            <Route path='/home/courses'>
              <Courses/>
            </Route>
            <Route path='/home/inbox'>
              <Inbox/>
            </Route>
            <Route path='/home/assignments'>
              <Assignments/>
            </Route>
          </Router>
        </div>
        <div className="vertical-line"></div>
        <div className="chat">
          <Chat/>
        </div>
      
      </div>
    </div>
    );
}


const App = () => {
  return(
  <Router>
    <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/register'>
        <Register/>
      </Route>
      <Route path='/home'>
        <Main/>
      </Route>
    </Switch>
  </Router>
  
  );
  
}
export default App;
