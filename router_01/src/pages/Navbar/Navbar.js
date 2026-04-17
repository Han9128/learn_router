import { NavLink } from "react-router";
import "./navbar.css";

function Navbar(){

    return(
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-items" >
                    <NavLink to="/home" className={({isActive}) => (`nav-item ${isActive? "active":""}`)} >Home</NavLink>
                </li>

                <li className="nav-items">
                    <NavLink to="/product" className={"nav-item"}>Product</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;