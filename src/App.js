import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Todos from './components/pages/Todos';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
        <Navbar/> 
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/todos" component={Todos} />     
      
    </div>
    </Router>
  );
  
  }


}

export default App;
