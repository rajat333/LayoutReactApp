import React from 'react'
import SocialLogin from 'react-social-login'
 
const Button = ({ children, triggerLogin, ...props }) => (
  <button className="btn btn-success" onClick={triggerLogin} {...props}>
    { children }
  </button>
)
 
export default SocialLogin(Button)