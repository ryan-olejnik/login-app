import axios from 'axios';

axios.defaults.withCredentials = true;


function _sendRequest(url, method, queryParams, data) {
  let headers = {
  };
  // const token = localStorage.getItem('access_token');
  // if (token) {
  //   // Line below is causing errors:
  //   // headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
  // }

  if (method === 'POST') {
    headers['Content-Type']= 'application/x-www-form-urlencoded'
  };


  return axios({
    url: url,
    method: method.toLowerCase(),
    params: queryParams,
    data: data,
    headers: headers,
    baseURL: process.env.REACT_APP_API_URL,
    validateStatus: function (status) { 
      return (status >= 200 && status < 300) || status === 401;
    }
  });
}

const requestsManager = {
  login(username, password) {
    return _sendRequest('/api/login', 'POST', null, `username=${username}&password=${password}`)
  },

  getUserData() {
    return _sendRequest('/api/users', 'GET')
  }
}

export default requestsManager