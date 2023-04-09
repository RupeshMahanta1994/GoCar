import "./Navbar.css"
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
color: rgb(37, 37, 229);
    text-decoration: none;
    &:hover{
        color: #fff;
    }
    
    
`

function Navbar() {
    return (
        <div className="Navbar active">
            <div className="NavbarLogo">
                <span>Go</span><NavLink to="/"><LocalCarWashIcon style={{ color: 'rgb(54, 54, 238)', fontSize: '2.5rem' }} /></NavLink>
            </div>
            <div className="NavbarLinks">
                <div className="NavbarLink">
                    <NavLink to="/">Home</NavLink>
                </div>
                <div className="NavbarLink">
                    <NavLink to="/about">About</NavLink>
                </div>
                <div className="NavbarLink">
                    <NavLink to="/models">models</NavLink>
                </div>
                <div className="NavbarLink">
                    <NavLink to="/testimonials">testimonials</NavLink>
                </div>
                <div className="NavbarLink">
                    <NavLink to="/ourteam">our team</NavLink>
                </div>
                <div className="NavbarLink">
                    <NavLink to="/contact">contact</NavLink>
                </div>
            </div>
            <div className="NavbarBtn">
                <button style={{ background: "none", color: "rgb(54, 54, 238)" }}>sign in</button>
                <button>register</button>
            </div>

        </div>
    )
}

export default Navbar
