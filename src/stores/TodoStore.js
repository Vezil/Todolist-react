import {decorate, observable} from 'mobx'; 
// , action, computed
class TodoStore {

     newId= 3;
     titleEditCashe = '';
     todos = [
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
}

decorate(TodoStore, {
    newId: observable,
    titleEditCashe: observable,
    todos: observable,
  });

const store = new TodoStore();
export default store;