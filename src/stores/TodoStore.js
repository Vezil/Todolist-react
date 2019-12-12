import React from 'react';
import  {observable, action} from 'mobx'; 

class TodoStore {
     @observable todoInput = React.createRef();
     @observable newId= 3;
     @observable titleEditCashe = '';
     @observable todos = [
      {
        'id':1,
        'title':'Matero X',
        'done': false,
        'editing': false,
      },
      {
        'id':2,
        'title':'Bombila X',
        'done': false,
        'editing': false,
      },
    ];

    @action addTodo = event => {

      if(event.key === 'Enter'){
  
        const todoInput = this.todoInput.current.value;
        
        if(todoInput.trim().length === 0){
          return;
        }
  
        this.todos.push({
          id: this.idForTodo,
          title: todoInput,
          done: false,
          editing: false,
        });

        this.newId++;
        this.todoInput.current.value=''
      }
    }
  @action deleteTodo = index => {

      this.todos.splice(index,1);
  }

  
  @action checkTodo = (todo,index,event) => {
    todo.done= !todo.done;
    this.todos.splice(index,1,todo);
 }

  @action editTodo = (todo,index,event) => {

      todo.editing = true;
      this.titleEditCashe = todo.title;
  }

  @action doneEdit = (todo,index,event) => {

      todo.editing = false;

      if(event.target.value.trim().length === 0){
        todo.title = this.titleEditCashe;
      } else {
        todo.title = event.target.value
      }

      this.todos.splice(index,1,todo);
  }

  @action cancelEdit = (todo,index,event) => {

      todo.title = this.titleEditCashe
      todo.editing = false;
      this.todos.splice(index,1,todo);
   }
      
      
}


const store = new TodoStore();
export default store;