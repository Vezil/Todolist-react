import React, {Component} from 'react'
import {getUser} from './functionality/UserFunctions'

class Todos extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            email:''
        }
    }

    componentDidMount(){
        getUser().then(response =>{
            this.setState({
                name:response.user.name,
                email:response.user.emial
            })
        })
    }
    render(){
        return(
            <div>
                <h1>Name : {this.state.name}</h1>
                <h2>Email : {this.state.email}</h2>
            </div>
        )
    }
}

export default Todos