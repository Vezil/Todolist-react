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
        return alert("CREATED! :)");
    })
    .catch(error => {
        alert(error + " incorrect data");
        
    })
}

export const login = user => {
    return axios
    .post('/login',{
        username: user.email,
        password: user.password
    })
    .then(response => {
        localStorage.setItem('usertoken',response.data.access_token)
        return response.data.access_token
    })       
    .catch(error => {
        alert(error + " incorrect data");
        
    })
}

export const getUser = () => {

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.usertoken

    return axios
    .get('/todos')
    .then(response => {
        // console.log(response);
        return response.data
    })
    .catch(error => {
        console.log(error)     
    })
}