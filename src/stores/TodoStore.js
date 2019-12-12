import  {observable, action, computed} from 'mobx'; 

class TodoStore {

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
}


const store = new TodoStore();
export default store;