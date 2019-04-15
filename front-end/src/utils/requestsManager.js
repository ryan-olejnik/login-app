import axios from 'axios';

axios.defaults.validateStatus = function (status) { 
  return (status >= 200 && status < 300) || status === 401;
}

const requestsManager = {
  login(username, password) {
    const config = { baseURL: process.env.REACT_APP_API_URL };
    return axios.post('/api/login', `username=${username}&password=${password}`, config);
  },

  getUserData() {
    const config = {
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }
    }
    return axios.get('/api/users', config);
  }
}

export default requestsManager