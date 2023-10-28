import Navbar from "./Navbar";
import './Header.css'
import {Twirl} from 'hamburger-react';
import {useMediaQuery} from 'react-responsive';
import { useState } from "react";
const Header =()=>{
    const isLaptopormobile = useMediaQuery({
        query:'(max-width:768px)',
    })
    const [hamburgurIsClicked, setHamburugurIsClicked]=useState(false)
    return (
        
    <header>
        <a href="/" className="logo"> Itish</a>
        {isLaptopormobile&&<Twirl toggle={setHamburugurIsClicked} toggled={hamburgurIsClicked}/>}
        <Navbar isclicked={hamburgurIsClicked}/>
    </header>)
}
export default Header;