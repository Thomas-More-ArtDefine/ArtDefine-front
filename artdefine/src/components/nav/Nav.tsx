import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as MessageIcon } from "../../assets/vectors/message-icon.svg";
import { ReactComponent as LogoText } from "../../assets/vectors/ArtDefine-LogoText.svg";
import { ReactComponent as Logo } from "../../assets/vectors/ArtDefine-Logo.svg";
import { ReactComponent as MobileProfile } from "../../assets/vectors/mobile-profile.svg";
import { ReactComponent as Hamburger } from "../../assets/vectors/Hamburger.svg";
import pfp from "../../assets/images/mock-profile-pic.png";
import MobileMenu from './Mobile-menu';
import { useAuth } from '../../context/AuthContext';

const Nav: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const navigate = useNavigate();
    const {user} = useAuth();

    const handleMenuClick = () => {
        setOpenMenu(true);
    };
    
    return (
        <div>
            {openMenu && <MobileMenu closeMenu={setOpenMenu} />}
            {/* <MobileMenu /> */}
            <nav className='navigation fixed'>
            {/* full nav */}
            <div className='desktop'>
                <ul>
                    <li className='navlogo'>
                        <Link to="/feed"><span className='logo'><Logo  /></span><span className='text'><LogoText  /></span></Link>
                    </li>
                    <li className='navbutton'>
                        <button className="primary has-icon nav" onClick={() => navigate("/feed")} ><span>Discover </span><i className="material-icons">travel_explore</i></button>
                    
                    </li>
                    <li className='navbutton'>
                    <button className="primary has-icon nav" onClick={() => navigate("/groups")} ><span>Groups </span><i className="material-icons">groups</i></button>
                        
                    </li>
                    <li className='navbutton'>
                        <button className="primary has-icon nav" onClick={() => navigate("/add")} ><span>Upload </span><i className="material-icons">upload</i></button>
                    
                    </li>
                    <li className='SearchBar' >
                        <div className='trigger clickable' onClick={() => navigate("/search")}></div>
                        <input disabled className='search' type="text" placeholder='Search...'  />
                        <i className="material-icons">search</i>
                    </li>
                    {user ?<li className='navprofile'>
                        <div className='navmessage'>
                            <Link to="/messages"><MessageIcon /></Link>
                        </div>
                         <Link to="/profile">
                            <div className='profile-block'>
                                <div className='profile-info'>
                                    <div className='username'>{user?.user_name}</div> 
                                    <div className='profile'>Profile</div>
                                </div>
                                <img src={user?.user_profile_picture} alt="profile picture" /> 
                            </div> 
                            
                        </Link></li>:<li className='navprofile'>
                        <div>
                           <button>Login</button> 
                           <button>Register</button>
                        </div>
                        
                    </li> }
                </ul>
            </div>
            
            {/* nav with hamburger menu */}
            <div className='mobile'>
                <ul>
                    <li className='navlogo'>
                        <Link to="/"><span className='logo'><Logo  /></span><span className='text'><LogoText  /></span></Link>
                    </li>
                    <li className='navprofile'>
                        {
                            user?<Link to="/profile">
                            <MobileProfile />
                        </Link> :
                        ''
                        }
                        
                        <span className='hamburger'>
                            <Hamburger onClick={handleMenuClick}  />
                        </span>
                        
                    </li>
                </ul>
            </div>
            
        </nav>
        
        </div>
        
        
        
    );
};

export default Nav;
// Path: artdefine/src/components/Nav.tsx