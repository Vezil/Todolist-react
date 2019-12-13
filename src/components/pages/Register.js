import React, {Component} from 'react'
import { register } from './functionality/UserFunctions'

class Register extends Component {

    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            password: '',
            errors: ''
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
            name: this.state.user,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(response =>{
            if(response){
                this.props.history.push(`/login`)
            }
        })
    }

    render(){
        return(
        <div class="login-form page" >
            <h1 class="login-header">Register</h1>
            <form action="" noValidate onSubmit={this.onSubmit} className="form">
                
                <div class="form-control">
                    <input type="text" name="name" className="login-input" placeholder="Name" value={this.state.name} onChange={this.onChange}/>
                </div>
                <div class="form-control">
                    <input type="email" name="username" className="login-input" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div class="form-control">
                    <input type="password" name="password" className="login-input" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                </div>
                <div class="form-control">
                    <button type="submit" class="btn-submit" disabled="loading">
                        {/* <div class="spinner"  v-if="loading"><div class="lds-facebook"><div></div><div></div><div></div></div>  </div>  */}
                        Create Account</button>
                    {/* <div v-if="serverErrors" class="server-errors">{{serverErrors}} </div>  
                    <div v-if="successMessages" class="success-messages">{{ successMessages }}</div> */}
                </div>    
                    
            </form>
        </div>
        )
    }

}

export default Register