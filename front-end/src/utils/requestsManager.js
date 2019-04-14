import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const requestsManager = {
  login(username, password) {
    const config = {
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      validateStatus: function (status) { 
        return (status >= 200 && status < 300) || status === 401;
      },
    };

    return axios.post('/api/login', `username=${username}&password=${password}`, config);
  }
}

export default requestsManager