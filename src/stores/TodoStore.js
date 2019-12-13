import React from 'react';
import  {observable, action} from 'mobx'; 
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

class TodoStore {
     @observable todoInput = React.createRef();
     @observable newId= 3;
     @observable titleEditCashe = '';
     @observable todos = [];

    @action addTodo = event => {

      if(event.key === 'Enter'){
  
        const todoInput = this.todoInput.current.value;
        
        if(todoInput.trim().length === 0){
          return;
        }
  
        this.todos.push({
          id: this.newId,
          title: todoInput,
          done: false,
          editing: false,
        });

        this.newId++;
        this.todoInput.current.value=''
      }
    }
  @action deleteTodo = id => {

      const index = this.todos.findIndex(item => item.id === id);

      this.todos.splice(index,1);
  }

  
  @action checkTodo = (todo,event) => {
    todo.done= !todo.done;

    const index = this.todos.findIndex(item => item.id === todo.id);

    this.todos.splice(index,1,todo);
 }

  @action editTodo = (todo,event) => {

      todo.editing = true;
      this.titleEditCashe = todo.title;

      const index = this.todos.findIndex(item => item.id === todo.id);
      
      this.todos.splice(index,1,todo);

  }

  @action doneEdit = (todo,event) => {

      todo.editing = false;

      if(event.target.value.trim().length === 0){
        todo.title = this.titleEditCashe;
      } else {
        todo.title = event.target.value;
      }
      const index = this.todos.findIndex(item => item.id === todo.id);

      this.todos.splice(index,1,todo);
  }

  @action cancelEdit = (todo,event) => {

      todo.title = this.titleEditCashe;
      todo.editing = false;

      const index = this.todos.findIndex(item => item.id === todo.id);
      
      this.todos.splice(index,1,todo);
   }

   @action retrieveTodos = () => {
     axios.get('/todos')
     .then(response => {
       console.log(response.data);
     })
     .catch(error => {
       console.log(error);
     })
   }
      
      
}


const store = new TodoStore();
export default store;