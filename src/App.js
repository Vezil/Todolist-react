import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodoItem from './components/TodoItem'
import {inject, observer} from 'mobx-react';

import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Todos from './components/pages/Todos';

@inject('TodoStore')
@observer

class App extends Component {
  render(){
    const TodoStore = this.props.TodoStore;
  return (
   <Router>
    <div className="App">
        <Navbar/> 
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/todos" component={Todos} />     
        

      {/* <header className="App-header">
      </header>
      <div className="Todo-container">
        <input type="text" className="todo-input" placeholder="What do you have to do ?" ref={TodoStore.todoInput} onKeyUp={TodoStore.addTodo} />
      <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {TodoStore.todos.map(todo =>  

        <TodoItem  key={todo.id} todo={todo}/>
        )
       }
      </ReactCSSTransitionGroup>
      </div> */}

    </div>
  </Router>
  );
  
  }

  // componentDidMount(){
  //   this.props.TodoStore.retrieveTodos();
  // }

}

export default App;
