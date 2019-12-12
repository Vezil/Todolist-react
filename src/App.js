import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Todo-container">
        <input type="text" className="todo-input" placeholder="What do you have to do ?" ref={this.todoInput} onKeyUp={this.addTodo} />

        {this.state.todos.map((todo,index) =>

            <div key={todo.id} className="todo-item">
              <input type="checkbox"/>
              <div className="todo-item-label">{todo.title}</div>
              <div className="remove-item">&times;</div>
            </div>
        )
        }
      </div>

    </div>
  );
  
  }

  todoInput = React.createRef();

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

  addTodo = event => {

    if(event.key === 'Enter'){

      const todoInput = this.todoInput.current.value;
      this.setState((prevState, props) => {
        let todos = prevState.todos;

        todos.push({
          id:3,
          title: todoInput,
          done:false,
        })
        return{
          todos: todos,

        };
      });
    }
  }
}

export default App;
