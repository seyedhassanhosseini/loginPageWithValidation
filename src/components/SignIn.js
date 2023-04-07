import React, {useState, useEffect} from 'react'
import {validate} from "./validate";

const SignIn = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: ""
  });
  const [errors, setErrors] = useState({});

  


  const handler = (event) => {
    setData({...data,[event.target.name] : event.target.value})
  };

  console.log(data)



  return (
    <div>
      <form>
        <h2>Sign Up</h2>
        <div>
          <label>Name</label>
          <input type='text' name="name" value={data.name}  onChange={handler}/>
        </div>
        <div>
          <label>Email</label>
          <input type='email' name="email" value={data.email} onChange={handler}/>
        </div>
        <div>
          <label>Password</label>
          <input type='password' name="password" value={data.password} onChange={handler}/>
        </div>
        <div>
          <label>Confirm Password</label>
          <input type='password' name="confirmPass" value={data.confirmPass} onChange={handler}/>
        </div>
        <div>
           <a href="#"> Login </a>
           <button type='submit'> Sign Up</button>
        </div>
      </form>
      
    </div>
  )
}

export default SignIn