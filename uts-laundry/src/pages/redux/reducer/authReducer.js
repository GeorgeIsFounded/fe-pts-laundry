const initialState = {
  username: '',
  email: '',
  password: '',
  status: '',
  jenisKelamin: '',
  isAuth: false,
};

export const authProcess = (state = initialState, action) => {
  if (action.type === 'login') {
    return {
      ...state,
      username: action.username,
      email: action.email,
      password: action.password,
      status: action.status,
      jenisKelamin: action.jenisKelamin,
      isAuth: action.isAuth,
    };
  }

  return state;
};
