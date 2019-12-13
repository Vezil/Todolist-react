import React from 'react';
// import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const TodoItem = inject('TodoStore')(observer(props => {
    const TodoStore = props.TodoStore;
    return (
        <div>
               <div key={props.todo.id} className="todo-item">
                <input type="checkbox" onChange={(event) => TodoStore.checkTodo(props.todo,event)}/>          
              {!props.todo.editing &&
                <div className={"todo-item-label " + (props.todo.done ? 'completed' : '')}
                onDoubleClick={(event) => TodoStore.editTodo(props.todo,event)}
                >{props.todo.title}</div>
              }
              {props.todo.editing &&
                <input className="todo-item-edit" type="text" autoFocus defaultValue={props.todo.title} 
                onBlur={(event) => TodoStore.doneEdit(props.todo,event)}
                onKeyUp={(event) => {
                  if(event.key === 'Enter') {
                TodoStore.doneEdit(props.todo,event);
                } else if (event.key === 'Escape') {
                  TodoStore.cancelEdit(props.todo,event);
                }
              
              }} />
              }
                <div className="delete-todo" onClick={(event) =>TodoStore.deleteTodo(props.todo.id)}>&times;</div>
              </div>
        </div>
    );
}));

// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired,
//     checkTodo: PropTypes.func.isRequired,
//     editTodo: PropTypes.func.isRequired,
//     doneTodo: PropTypes.func.isRequired,
//     cancelTodo: PropTypes.func.isRequired,
//     deleteTodo: PropTypes.func.isRequired,
// };

export default TodoItem;