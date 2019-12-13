import React, {Component} from 'react'
import {login} from './functionality/UserFunctions'

class Login extends Component {

    constructor(){
        super()
        this.state = {
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

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(response =>{

                this.props.history.push(`/todos`)
        
        })
    }

    render(){
        return(
        <div className="login-form page" >
            <h1 className="login-header">Login</h1>
            <form noValidate onSubmit={this.onSubmit} className="form">
                
                <div className="form-control">
                    <input type="email" name="email" className="login-input" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div className="form-control">
                    <input type="password" name="password" className="login-input" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                </div>
                <div className="form-control">
                    <button type="submit" className="btn-submit">
                        {/* <div class="spinner"  v-if="loading"><div class="lds-facebook"><div></div><div></div><div></div></div>  </div>  */}
                        Login</button>
                    {/* <div v-if="serverErrors" class="server-errors">{{serverErrors}} </div>  
                    <div v-if="successMessages" class="success-messages">{{ successMessages }}</div> */}
                </div>    
                    
            </form>
        </div>
        )
    }

}

export default Login