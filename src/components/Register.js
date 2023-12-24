import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { hashSync } from 'bcryptjs'
export default function Register() {
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm()
const Navigate=useNavigate();
    // const handleSubmit=()=>{

    // }
const [user,SetUser]=useState({})
const [err,setErr]=useState('')
    const onSubmit=async(userObj)=>{
        console.log(userObj)
        SetUser(userObj);
        try{
            //     console.log(user.username)
            // //duplicate user check
            // const userSearch=await axios.get(`http://localhost:4000/users?username=${user.username}`)
            // console.log(userSearch)
            // let userList=userSearch.data
            // if(userList.length===0){
                console.log('User before GET request:', user);
    
            const userSearch = await axios.get(`http://localhost:4000/users?username=${userObj.username}`);
            const userList = userSearch.data;
    
            console.log('User list after GET request:', userList);
           let hashedPassword= hashSync(userObj.password,5)
           userObj.password=hashedPassword
                if(userList.length===0){
                const response=await axios.post('http://localhost:4000/users',userObj)
                if(response.status===201){
                    Navigate("/Login")
                }
            
    
            else{

                
                setErr('User with this username already exists.');
            }
        }
        }
        catch(err){
    setErr(err.message)
        }
    
           
    
    

    }
    

    

   
        
  return (
    <>
    <div className="container d-flex justify-content-center">
    <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">  <h1 className="display-1">Registration</h1></div>
      
        {err.length!==0&&<p className='text-danger fs-4 text-center'>{err}</p>}
        <div className="mb-3">
            <label htmlFor="username" className="form-label  d-flex justify-content-flex-start">
                Username:
            </label>
            <input
                type="text"
               {...register("username", { required:true,minLength:5})}
                id="username"
                className="form-control col-lg-4"
                placeholder="Enter your Username"
                
                style={{ maxWidth: '400px', width: '100%' }}
            />
            {errors.username?.type==='required'&&<p className='text-danger fs-4'>username is required</p>}
            {errors.username?.type==='minLength'&&<p className='text-danger fs-4'>minlength is 5</p>}

        </div>
        <div className="mb-3">
<label htmlFor="" className="form-check-label d-flex justify-content-flex-start">email:</label>
<input type="email"{...register("email",{required:true})} id="" className="form-control" placeholder='enter your email..'   style={{maxWidth:'400px',width:'100%'}}/>

{errors.username?.type==='required'&&<p className='text-danger fs-4 text-center'>Email is required</p>}
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label d-flex justify-content-flex-start text-dark">
                Password:
            </label>
            <input
                type="password"
               {...register("password")}
                id="password"
                className="form-control col-lg-4"
                placeholder="Enter your password"
                
                style={{ maxWidth: '400px', width: '100%' }}
            />
        </div>
       <div className="mb-3">
        <h6 className='d-flex justify-content flex-start'>Gender</h6>
        
        <div className="form-check">
            <input className="form-check-input" type="radio"{...register("radio")} id="" />
            <label className="form-check-label d-flex justify-content-flex-start" htmlFor=""> Male</label>
        </div>
        <div className="form-check">
            <input
                className="form-check-input"
                type="radio"
               {...register("radio",{required:'select an option'})}
                id=""
             
            />
            <label className="form-check-label d-flex justify-content-flex-start" htmlFor="">
               Female
            </label>
        </div>
        {errors.radio&&<p className='text-danger'>{errors.radio.message}</p>}
       </div>
        
        <div className="mb-3">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id=""{...register("agreement")}/>
                <label className="form-check-label" htmlFor="">I agree above information is correct</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary">
            Submit
        </button>
        <p className="fs-4">
            <Link className="nav-link" to="/Login">Already Registered?</Link>
        </p>
    </form>
</div>
    
    </>
  )
}
