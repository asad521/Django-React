import React from 'react'
import {useState} from 'react';
import { useDispatch } from 'react-redux'
import { loginCall } from '../apiCalls/api';

export const Login = () => {

    const dispatch = useDispatch()
    const [email,setEmail] = useState([]);
    const [password,setPassword] = useState([]);
    // console.log('print')
    const submitFunction = (e) => {
        loginCall({email,password},dispatch)

    }
 
    return(
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} id="exampleInputEmail1" placeholder="example@yahoo.com" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"  >Password</label>
                    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Please Enter Your Password" />
                </div>
                <div className="col-auto">
                    <label htmlFor="inputPassword2" >Confirm Password</label>
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Please Confirm Your Password" />
                </div>

                <button type="button" className="btn btn-primary" onClick={submitFunction}>Submit</button>
            </form>
        </div>

    )
}
