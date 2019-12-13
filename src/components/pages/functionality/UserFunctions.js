import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const register = newUser => {

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.usertoken

    return axios
    .post('/register', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
    },{
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        
    })
}

export const login = user => {
    return axios
    .post('/login',{
        username: user.email,
        password: user.password
    })
    .then(response => {
        localStorage.setItem('usertoken',response.data.token)
        console.log(response);
    })       
    .catch(error => {
        console.log(error);
        
    })
}

export const getUser = () => {

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.usertoken

    return axios
    .post('/user')
    .then(response => {
        console.log(response);
        return response.data
    })
    .catch(error => {
        console.log(error);
        
    })
}