import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
        
        <Router>
            <Route exact path="pages/Home" component={Home} />
            <Route exact path="pages/register" component={Register} />
            <Route exact path="pages/login" component={Login} />
            <Route exact path="pages/profile" component={Profile} />     
        </Router>

      <header className="App-header">
      </header>
      <div className="Todo-container">
        <input type="text" className="todo-input" placeholder="What do you have to do ?" ref={TodoStore.todoInput} onKeyUp={TodoStore.addTodo} />
      <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {TodoStore.todos.map(todo =>  

        <TodoItem  key={todo.id} todo={todo}/>
        )
       }
      </ReactCSSTransitionGroup>
      </div>

    </div>
  );
  
  }

  componentDidMount(){
    this.props.TodoStore.retrieveTodos();
  }

}

export default App;
