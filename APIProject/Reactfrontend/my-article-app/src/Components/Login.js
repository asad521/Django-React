import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';



export const Login = () => {

  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [isLogin, setLogin] = useState(false)
  const [token, setToken] = useState(null)
  const navigate = useNavigate();
  const cookies = new Cookies();
  
  const Register = () => {
    console.log('in register')
    fetch('http://127.0.0.1:8000/api/users/', {
      'method': 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify({ username, password })
    }).then(res => res.json()).then(res => 
      {cookies.set('mytoken', res.token)
     setToken(cookies.get('mytoken'))
     navigate('/articles/');

      console.log(token)})

  }
  const Submit = () => {
    console.log("in login")
    fetch('http://127.0.0.1:8000/auth/', {
      'method': 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify({ username, password })
    }).then(res => res.json()).then(res => {cookies.set('mytoken', res.token)
    navigate('/articles/');

    setToken(cookies.get('mytoken'))
    console.log(token)
  })

  }

  return (
    <div >
      {isLogin ? <h1> Register</h1> : <h1> Login</h1>}


      <label className="form-label">User Name
        <input placeholder='Enter User Name' onChange={(e) => setUsername(e.target.value)}></input>
      </label>
      <br></br>
      <label className="form-label">Password
        <input placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}></input>
      </label >
      <br></br>
      {isLogin ? <button className='btn btn-primary' onClick={Register}>Register</button> : <button className='btn btn-primary' onClick={Submit}>Login</button>
      }

      <br></br>
      {isLogin ? <h3>If you do  have account, please Login
        <button className='btn btn-primary' onClick={() => setLogin(false)}>Login</button>

      </h3> : <h3>If you  do not have account, please Register
        <button className='btn btn-primary' onClick={() => setLogin(true)}>Register</button>
      </h3>}




    </div>
  )
}

export default Login;
