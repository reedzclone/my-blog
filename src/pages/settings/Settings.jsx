import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import boxed from "../../asset/images/boxed.jpg"

const Settings = () => {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img className="profilepix" src={boxed} alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Username" />
                <label>Email</label>
                <input type="email" placeholder="usernamegmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
            <Sidebar/>
    </div>
  )
}

export default Settings