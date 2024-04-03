import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as MessageIcon } from "../assets/Vectors/message-icon.svg";
import { ReactComponent as LogoText } from "../assets/Vectors/ArtDefine-LogoText.svg";
import { ReactComponent as Logo } from "../assets/Vectors/ArtDefine-Logo.svg";
import pfp from "../assets/images/mock-profile-pic.png";

const Nav: React.FC = () => {
    const navigate = useNavigate();
    return (
        <nav className='navigation'>
            <ul>
                <li className='navlogo'>
                    <Link to="/"><span className='logo'><Logo  /></span><span className='text'><LogoText  /></span></Link>
                </li>
                <li className='navbutton'>
                    <button className="primary has-icon nav" onClick={() => navigate("/feed")} ><span>Discover </span><i className="material-icons">travel_explore</i></button>
                   
                </li>
                <li className='navbutton'>
                <button className="primary has-icon nav" onClick={() => navigate("/groups")} ><span>Groups </span><i className="material-icons">groups</i></button>
                    
                </li>
                <li className='navbutton'>
                    <button className="primary has-icon nav" onClick={() => navigate("/listpage")} ><span>Upload </span><i className="material-icons">upload</i></button>
                
                </li>
                <li className='SearchBar'>
                    <input className='search' type="text" placeholder='Search...' />
                    <i className="material-icons">search</i>
                </li>
                <li className='navmessages'>
                    <div className='navlink'>
                        <Link to="/messages"><MessageIcon /></Link>
                        </div>
                </li>
                <li className='navprofile'>
                    <Link to="/profile">
                        <div className='profile-info'><div className='username'>[username]</div> <div className='profile'>profile</div></div>
                        <img src={pfp} alt="profile picture" />
                    </Link> 
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
// Path: artdefine/src/components/Nav.tsx