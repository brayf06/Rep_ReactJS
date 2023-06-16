import "../CartWidget/CartWidget.js"
import CartWidget from "../CartWidget/CartWidget.js";
import { NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import React, {useState} from "react";
import "./NavBarStyle.css"


function NavBar(){
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');

        toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler');
    }
    return(
    <div>
         <nav className="nav__main">
            <Link to="/">
                <li>
                        <img className="imagen" src="/imagenes/logo.png" alt="imgLogo"></img><a className="nav__link">TCT Group</a>
                </li>
            </Link>
               <ul className={active}>
                <Link to="/" className="nav__link">Inicio</Link>
                <NavDropdown title="Destinos" className="nav__link">
                    <NavDropdown.Item className="nav__link"><NavLink to="/continente/AmericadelSur">America del Sur</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="nav__link"><NavLink to="/continente/Europa">Europa</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="nav__link"><NavLink to="/continente/Asia">Asia</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="nav__link"><NavLink to="/continente/Oceania">Oceania</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="nav__link"><NavLink to="/continente/AmericadelNorte">America del Norte</NavLink></NavDropdown.Item>
                </NavDropdown>    
                    <Link to="/contacto" className="nav__link">Contacto</Link>
                    <Link to="/cart" className="nav__link"><CartWidget/></Link>
                </ul>
            
             <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
         </nav> 
    </div>
    )
}
export default NavBar