import { loginStart, loginSuccess, loginError } from "../counter/counterSlice";

export const loginCall = async (args, dispatch) => {
  console.log('in login call')
  const username = args.email;
  const password = args.password;
  console.log(username + 'this is user data')
  dispatch(loginStart);

  try {
    console.log('in try')
    fetch('http://127.0.0.1:8000/auth/', {
      'method': 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify({ username, password })
    }).then(res => res.json()).then(res => {
      console.log('this is resposne=' + JSON.stringify(res))
      // cookies.set('mytoken', res.token)sdf
      // navigate('/articles/');

      // setToken(cookies.get('mytoken'))
      // console.log(token)
    })
  } catch (error) {
    console.log('this is error=' + error)

  }
}