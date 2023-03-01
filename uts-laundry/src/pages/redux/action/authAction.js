import Cookies from 'js-cookie';
import { loginProses } from '../../../API/auth';

export function authLogin(payload) {
  return async (dispatch) => {
    try {
      let response = await loginProses();
      let data = response.data;

      dispatch({
        type: 'login',
        username: data?.user?.username,
        password: data?.user?.password,
        isAuth: true,
      });

      Cookies.set('token', data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}
