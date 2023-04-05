import { Link } from "react-router-dom"
import "./login.css"

const Login = () => {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Email" />
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Password" />
            <button className="loginButton">Login</button>
        </form>
        <div className="register">
            <span className="acct">Don't have an account?</span><button className="registerButton">
            <Link to="/signup" className="link">Signup</Link>
            </button>
            </div>        
    </div>
  )
}

export default Login