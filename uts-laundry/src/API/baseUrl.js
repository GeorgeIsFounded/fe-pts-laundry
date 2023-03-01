import axios from 'axios';
import Cookies from 'js-cookie';

const login = axios.create({
  baseURL: 'http://localhost:2005',
  headers: {
    Accept: 'application/json',
    Autorization: `${Cookies.get('token')}`,
  },
});

login.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log('err', error);
    if (401 === error.response.status) {
      Cookies.remove('token');
      clearToken();
      localStorage.clear();
      window.location.replace('/login');
    } else {
      return Promise.reject(error);
    }
  }
);
export const syncToken = () => {
  login.defaults.headers['Authorization'] = `Bearer ${Cookies.get(
    'token'
  )}`;
};
export const clearToken = () => {
  delete login.defaults.headers['Authorization'];
};
export default login;
