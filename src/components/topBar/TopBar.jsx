import image from "../../images/cognizant-logo.f02e0098.png";
import { NavLink } from "react-router-dom";

import './topBar.scss';

const TopBar = () => {
    return (

    <NavLink
    to='/'
    exact='exact'
    >
      <header className="top-bar">
        <img src={image} height={50} alt="logo"/>
      </header>
    </NavLink>
    );
  };
  
  export default TopBar;