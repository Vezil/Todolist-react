import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Todo-container">
        <input type="text" className="todo-input" placeholder="What do you have to do ?"/>
          <div className="todo-item">
            <input type="checkbox"/>
            <div className="todo-item-label">Todo Item1</div>
            <div className="remove-item">&times;</div>
          </div>

          <div className="todo-item">
            <input type="checkbox"/>
            <div className="todo-item-label">Todo Item1</div>
            <div className="remove-item">&times;</div>
          </div>

      </div>



    </div>
  );
  
  }

  state = {
    todos:[
      {
        'id':1,
        'title':'Matero',
        'done': false,
      },
      {
        'id':2,
        'title':'Bombila',
        'done': false,
      },
    ]
  }
}

export default App;
