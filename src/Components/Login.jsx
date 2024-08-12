import React, {  useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import BasicModal from '../Components/SignUp'
import { ThemeContext } from "./Themes/ThemeChanger";
import ForgotPassword from "./settings/ForgotPassword";


function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: ''
  })


  const handleLog = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem('user'));
    if (input.email === loggeduser.email && input.password === loggeduser.password) {
      localStorage.setItem('loggedin', true)
      navigate('/')
    } else {
      alert('Enter Valid email and password')
    }
  }
  
  const {theme}=useContext(ThemeContext)

  return (
    <>
      <div className="background"
       style={{background:theme=='light'? "#ffff":'#1B1212'}} >
        <div className="container"
         style={{background:theme=='light'?'white':'transparent', 
          border:theme=='light'?'none':'1px solid #ffff'}} >
          <div className="input">
            <input type='email' placeholder='Email address' name='email'
              value={input.email}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
          </div>
          <div className="input">
            <input type='password' placeholder='Password' name='password'
              value={input.password}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
          </div>
          <div className="anchor">
            <Link to='/' onClick={handleLog}>Log in</Link>
          </div>
         
          <div className="anchor1">
           <ForgotPassword/>
          </div>
          <div className="break">
            <hr />
          </div>
          <BasicModal />
        </div>
      </div>
    </>
  )
}

export default Login
