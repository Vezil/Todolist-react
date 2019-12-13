import React, {Component} from 'react'
import { register } from './functionality/UserFunctions'

class Register extends Component {

    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            password: '',
            errors: {}
        }
    
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    }   

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(response =>{ 
            if(response){
                this.props.history.push(`/login`)     
            }       
        }).catch(error=>{console.log(error)})
    }

    render(){
        return(
        <div className="login-form page" >
            <h1 className="login-header">Register</h1>
            <form action="" noValidate onSubmit={this.onSubmit} className="form">
                
                <div className="form-control">
                    <input type="text" name="name" className="login-input" placeholder="Name" value={this.state.name} onChange={this.onChange}/>
                </div>
                <div className="form-control">
                    <input type="email" name="email" className="login-input" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div className="form-control">
                    <input type="password" name="password" className="login-input" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                </div>
                <div className="form-control">
                    <button type="submit" className="btn-submit" >
                        Create Account</button>
                </div>    
                    
            </form>
        </div>
        )
    }

}

export default Register