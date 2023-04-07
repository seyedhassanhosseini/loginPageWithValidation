import React, {useState, useEffect} from 'react'
import {validate} from "./validate";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './toast'

const SignIn = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    isAccepted: false
  });

  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});



  useEffect(() => {
    setErrors(validate(data))
  },[data, touch]);

  console.log(errors);

  const handler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({...data,[event.target.name] : event.target.checked})
    } else {
      setData({...data,[event.target.name] : event.target.value})
    }
  };

  const focusHandler = event => {
    setTouch({...touch,[event.target.name] : true})
  };

  const submitHandler = event => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
        notify("you signed in sussesfully", "success")
    } else {
      notify("Invalid Data","error")
      setTouch({
        name: true,
        email: true,
        password: true,
        confirmPass: true,
        isAccepted: true
      })
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>Sign Up</h2>
        <div>
          <label>Name</label>
          <input type='text' name="name" value={data.name}  onChange={handler} onFocus={focusHandler}/>
          {errors.name && touch.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type='email' name="email" value={data.email} onChange={handler}onFocus={focusHandler}/>
          {errors.email && touch.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input type='password' name="password" value={data.password} onChange={handler}onFocus={focusHandler}/>
          {errors.password && touch.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type='password' name="confirmPass" value={data.confirmPass} onChange={handler}onFocus={focusHandler}/>
          {errors.confirmPass && touch.confirmPass &&  <span>{errors.confirmPass}</span>}
        </div>
        <div>
          <label>Policy</label>
          <input type='checkbox' name="isAccepted" value={data.isAccepted} onChange={handler}onFocus={focusHandler}/>
          {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}
        </div>
        <div>
           <a href="#"> Login </a>
           <button type='submit'> Sign Up</button>
        </div>
      </form>
      <ToastContainer />

      
    </div>
  )
}

export default SignIn