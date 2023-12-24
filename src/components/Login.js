import React, { useContext, useEffect, useState } from 'react';
import {useForm} from 'react-hook-form'

import { Link, useNavigate } from 'react-router-dom';
import { contextLogin } from './LoginContext';
import axios from 'axios'
function LoginForm() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const Navigate=useNavigate()
  const [err,setErr]=useState('')
  let [current,SetCurrent,userLoginStatus,SetuserLoginStatus,onsubmit]=useContext(contextLogin)
  useEffect(()=>{
    if(userLoginStatus){
Navigate('/UserProfile')
    }
  },[userLoginStatus])
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
       
      <form className="mx-auto" onSubmit={handleSubmit(onsubmit)}>
      <h1 className="display-1 d-block">Login</h1>
      {err.length!==0 &&<p className='text-danger fs-3 text-center'>{err}</p>}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="mt-3">Email address</label>
          <input
            type="email"
            className="form-control mt-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            style={{ maxWidth: '400px', width: '100%' }}
            {...register("email",{required:true})}
          />
         {errors.email?.type==='required'&&<p className='text-danger fs-4'>Email is required</p>}
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1 mt-3">Password</label>
          <input
            type="password"
            className="form-control mt-3"
            id="exampleInputPassword1"
            placeholder="Password"
            style={{ maxWidth: '400px', width: '100%' }}
            {...register("password",{required:true})}
          />
        </div>
        {errors.password?.type==='required'&&<p className='text-danger fs-4'>password is required</p>}
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
        <p className="fs-4">
            <Link className="nav-link" to="/Register">Not  Registered Yet?</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
