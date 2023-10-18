import { useState } from "react"
import * as constans from "../utils/constants"

const Header = () => {
    let [btnName, setBtnName] = useState("login")
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src={constans.LOGO_URL} alt='logo' />
            </div>
            <div className='nav-items'>
               <ul>
                  <li>Home</li>
                  <li>About US</li>
                  <li>Contact US</li>
                  <li>Cart</li>
                  <button className="login-button" onClick={() => { setBtnName(btnName === "login" ? "logout" : "login") }}>{btnName}</button>
               </ul>
            </div>
        </div>
    )
}

export default Header