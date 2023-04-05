import './navbar.css';
import profilephoto from "../../asset/images/profilephoto.webp"
import { Link } from 'react-router-dom';

const Navbar = () => {

    const user = true;

  return (
    <div className='nav'>
        <div className="navLeft">
            <i className="navIcon fa-brands fa-square-facebook"></i>
            <i className="navIcon fa-brands fa-square-twitter"></i>
            <i className="navIcon fa-brands fa-square-instagram"></i>
            <i className="navIcon fa-brands fa-linkedin"></i>
            </div>
        <div className="navCenter">
            <ul className='navList'>
                <li className="navListItem"><Link to="/" className='link'>HOME</Link></li>
                <li className="navListItem"><Link to="/settings" className='link'>ABOUT</Link></li>
                <li className="navListItem"><Link to="/write" className='link'>WRITE</Link></li>
                <li className="navListItem"></li>
                <li className="navListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="navRight">
            {
                user ? (
                    <>
                    <img className='navImage' src={profilephoto} alt="" />
                    <i className="navSearch fa-solid fa-magnifying-glass"></i>
                    </>

                ) : (
                    <>
                <Link to="/login" className='navReg link'>Login</Link>
                <Link to="/signup" className='navReg link'>Signup</Link>
                </>
                )
            }
            
        </div>
    </div>
  )
}

export default Navbar