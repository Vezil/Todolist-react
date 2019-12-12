import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodoItem from './components/TodoItem'

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Todo-container">
        <input type="text" className="todo-input" placeholder="What do you have to do ?" ref={this.todoInput} onKeyUp={this.addTodo} />
      <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {this.state.todos.map((todo,index) =>  

        <TodoItem  key={todo.id} todo={todo} index={index} checkTodo={this.checkTodo} doneEdit={this.doneEdit} 
        cancelEdit={this.cancelEdit} editTodo={this.editTodo} deleteTodo={this.deleteTodo}/>
        )
        }
      </ReactCSSTransitionGroup>
      </div>

    </div>
  );
  
  }

  todoInput = React.createRef();

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

  addTodo = event => {

    if(event.key === 'Enter'){

      const todoInput = this.todoInput.current.value;
      
      if(todoInput.trim().length === 0){
        return;
      }

      this.setState((prevState, props) => {
        let todos = prevState.todos;
        let newId = prevState.newId+1;

        todos.push({
          id:newId,
          title: todoInput,
          done:false,
        })
        return{
          todos: todos,
          newId: newId,
        };
      });

      this.todoInput.current.value=''
    }
  }

    deleteTodo = index => {

      this.setState((prevState, props) => {
        let todos = prevState.todos;
        todos.splice(index,1);
        return{
          todos: todos,
        };
    });
  }

  
  checkTodo = (todo,index,event) => {

    this.setState((prevState, props) => {
      let todos = prevState.todos;
       todo.done = !todo.done;
      todos.splice(index,1,todo);
      return{
        todos: todos,
      };
  });
}

  editTodo = (todo,index,event) => {

  this.setState((prevState, props) => {
    let todos = prevState.todos;
     todo.editing = true;
    todos.splice(index,1,todo);
    return{
      todos: todos,
    };
   });
  }

  doneEdit = (todo,index,event) => {

    event.persist();

    this.setState((prevState, props) => {
      let todos = prevState.todos;
       todo.editing = false;

       if(event.target.value.trim().length === 0) {
         todo.title = prevState.titleEditCashe;
       } else {

       todo.title = event.target.value;
      }

      todos.splice(index,1,todo);

      return{
        todos: todos,
      };
     });
    }

    cancelEdit = (todo,index,event) => {

  
      this.setState((prevState, props) => {
        let todos = prevState.todos;
         todo.editing = false;
        todos.splice(index,1,todo);
        return{
          todos: todos,
          titleEditCashe: todo.title,
        };
       });
    }


}

export default App;
