import requestsManager from './requestsManager';

class AuthService {
  login(username, password) {
    return new Promise((resolve, reject) => {
      requestsManager.login(username, password)
      .then (res => {
        console.log('token =', token);
        const token = res.data.token;
        if (token && res.status === 200) {
          localStorage.setItem('access_token', token);
          const result = {
            success: true,
            description: 'Succss'
          };
          resolve(result);
        } else if (res.status === 401) {
          const result = {
            success: false,
            description: 'Credentials are incorrect'
          };
          reject(result);
        } else {
          const result = {
            success: false,
            description: 'Error logging in'
          };
          reject(result); 
        }
      })
      .catch(err => {
        console.error(err);
        const result = {
          success: false,
          description: 'Error connecting to server'
        };
        reject(result);
      });
    })
  }

  loggedIn() {
    const token = localStorage.getItem('access_token');

    // Only check if token exists.
    // API will properly verify token when resources are requested
    return !!token;
  }
}

export default AuthService