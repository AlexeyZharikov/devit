import { NavLink } from "react-router-dom";
import './header.component.scss';
import {AiOutlinePlusCircle} from "react-icons/ai"
import LogoutButton from "../logoutBtn/logout.component";
import LoginButton from "../loginBtn/loginBtn.component";

const Header = () => {
  const token = localStorage.token;
  return(
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <h1>DevIT test task</h1>
          <div className="nav">
            {/* <NavLink disabled={token} className="login-btn" to="/login">login</NavLink> */}
            <LoginButton/>
            <LogoutButton />
            <NavLink className="nav-link" to="/">Main</NavLink>
            <NavLink className="nav-link new-post" to="/create"><AiOutlinePlusCircle/></NavLink>
            
          </div>
          
        </div>

        

      </div>
    </header>
  )
}

export default Header;