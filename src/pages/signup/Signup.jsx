import { Link } from "react-router-dom"
import "./signup.css"

const signup = () => {
  return (
    <div className="signup">
         <span className="signupTitle">Signup</span>
        <form className="signupForm">
        <label>Username</label>
            <input className="signupInput" type="text" placeholder="Username" />
            <label>Email</label>
            <input className="signupInput" type="text" placeholder="Email" />
            <label>Password</label>
            <input className="signupInput" type="password" placeholder="Password" />
            <button className="signupButton">signup</button>
        </form>
        <div className="apply">
            <span className="acct">Already have an account?</span><button className="applyButton">
              <Link to="/login" className="link">Login</Link>
            </button>
        </div>        
    </div>
  )
}

export default signup