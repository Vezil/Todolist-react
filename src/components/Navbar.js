import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'

class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
    render(){
        const loginRegLink = (
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li className="yourtodo"><Link to="/todos">Todos</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>        
                {/* <li v-if="loggedIn"><Link to="/logout">Logout</Link></li>         */}
            </ul>
        )
        const userLink = (
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li className="yourtodo"><Link to="/todos">Todos</Link></li>     
                <li><a href="" onClick={this.logOut.bind(this)}> Logout </a></li>        
            </ul>
        )
        return(
            <nav>
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                </ul>
                {localStorage.usertoken ? userLink : loginRegLink}
            </nav>
            
        )
    }
}