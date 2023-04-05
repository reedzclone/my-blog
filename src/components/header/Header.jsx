import './header.css';
import boxed from "../../asset/images/boxed.jpg"

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitlesm'>React & Node</span>
            <span className='headerTitlelg'>Blog</span>
        </div>
        <img className="headerImg" src={boxed} alt="" />
    </div>
  )
}

export default Header