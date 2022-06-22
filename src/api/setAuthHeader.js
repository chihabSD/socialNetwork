import axios from 'axios'

export default (token) => {
    console.log(token, ' set auth header is called ');
    // if there is a token 
    if(token){ 
        axios.defaults.headers.common['Authorization'] =`Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}