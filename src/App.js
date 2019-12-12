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
              <input type="checkbox" onChange={(event) => this.checkTodo(todo,index,event)}/>          
            {!todo.editing &&
              <div className={"todo-item-label " + (todo.done ? 'completed' : '')}
              onDoubleClick={(event) => this.editTodo(todo,index,event)}
              >{todo.title}</div>
            }
            {todo.editing &&
              <input className="todo-item-edit" type="text" autoFocus defaultValue={todo.title} 
              onBlur={(event) => this.doneEdit(todo,index,event)}
              onKeyUp={(event) => {
                if(event.key === 'Enter') {
               this.doneEdit(todo,index,event);
              } else if (event.key === 'Escape') {
                this.cancelEdit(todo,index,event);
              }
            
            }} />
            }
              <div className="remove-item" onClick={(event) =>this.deleteTodo(index)}>&times;</div>
            </div>
        )
        }
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
        let newId = prevState.newId++;

        todos.push({
          id:3,
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
       todo.title = event.target.value;
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
