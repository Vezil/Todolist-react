import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodoItem from './components/TodoItem'
import {inject, observer} from 'mobx-react';

@inject('TodoStore')
@observer

class App extends Component {
  render(){
    const TodoStore = this.props.TodoStore;
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Todo-container">
        <input type="text" className="todo-input" placeholder="What do you have to do ?" ref={TodoStore.todoInput} onKeyUp={TodoStore.addTodo} />
      <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {TodoStore.todos.map((todo,index) =>  

        <TodoItem  key={todo.id} todo={todo} index={index}/>
        )
       }
      </ReactCSSTransitionGroup>
      </div>

    </div>
  );
  
  }



  state = {
    newId: 3,
    titleEditCashe : '',
    todos:[
      {
        'id':1,
        'title':'Matero',
        'done': false,
        'editing': false,
      },
      {
        'id':2,
        'title':'Bombila',
        'done': false,
        'editing': false,
      },
    ]
  }

}

export default App;
