import React from 'react'

export const Login = () => {

    function clickFunction(){
        alert("A button is clicked")
    }

  return (
    <div >
    <div>Login page</div>
    <button className="btn btn-primary" onClick={clickFunction}>Click here to Login</button>
    </div>
  )
}

export default Login;
