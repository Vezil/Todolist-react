import React, {Component} from 'react'
import {getUser} from './functionality/UserFunctions'
import '../../App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodoItem from '../../components/TodoItem'
import {inject, observer} from 'mobx-react';

@inject('TodoStore')
@observer

class Todos extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            email:''
        }
    }

    render(){
       
        const TodoStore = this.props.TodoStore;

        return(
            <div>
                
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
        )
    }


    componentDidMount(){
        getUser().then(response =>{
            // this.TodoStore = response
            this.props.TodoStore.todos = response;
            // console.log();
        })
    }

}




export default Todos