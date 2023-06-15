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
                    <div>
                    <a className="nav__link"><svg id="logo-58" width="80" height="80" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="stroke" d="M25 43.94H14.06L10.86 38.39L8.28998 33.94L10.86 29.48" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M10.86 29.4801H5.7L3.13 25.0001L6.77 18.6901L8.27001 16.1001L10.87 11.6101L13.44 7.15006L14.06 6.06006H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M25 39.48H16.64L13.44 33.94L10.86 29.48L13.47 25H8.28003L11.95 18.63L13.44 16.06L16.01 11.61L16.64 10.52H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M25 15.01H19.23L13.47 25L19.23 34.99H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M8.28001 25L5.70001 29.48" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M44.3 29.48L41.72 25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M25 43.94H35.94L39.14 38.39L41.71 33.94L39.14 29.48" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M39.14 29.4801L44.31 29.4401L46.87 25.0001L43.23 18.6901L41.73 16.1001L39.13 11.6101L36.56 7.15006L35.94 6.06006H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M25 39.48H33.36L36.56 33.94L39.14 29.48L36.53 25H41.72L38.05 18.63L36.56 16.06L33.99 11.61L33.36 10.52H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M25 15.01H30.77L36.53 25L30.77 34.99H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M19.23 15.01L16.64 10.52" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path class="stroke" d="M30.77 15.01L33.36 10.52" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path></svg>TCT Group</a>
                    </div>
                </li>
            </Link>
             <div>
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
            </div>
            
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