import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";
import {Switch} from "@/components/ui/switch";


const NavBar = function(){
    return (
        <div className={"nav-container flex items-center justify-between gap-4 px-10 py-1"}>
            <span className="nav-logo">
                <img src={logo2} alt={"navbar-logo"} className="h-12 w-auto" />
            </span>

            <ul className="nav-links text-[var(--text-primary)] flex justify-center gap-5 items-center flex-1">
                <li className="nav-item">
                    <NavLink to={"/"}> Home </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/"}> Services </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/"}> Portfolio </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/"}> About Us</NavLink>
                </li>
                <div className="nav-item">
                    <NavLink to={"/"}> Contacts </NavLink>
                </div>
            </ul>

            <div className="nav-other flex gap-5 items-center">
                <Button> Join Us</Button>
                
                <div className="change-theme flex gap-1 items-center">
                    <Moon className="text-white"/>
                    <Switch />
                    <Sun className="text-yellow-300"/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;