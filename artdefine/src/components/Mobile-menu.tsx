import React from 'react';

const MobileMenu = ({ closeMenu }: { closeMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className='mobileNav'>
            <div className='modalbackground' onClick={() => {closeMenu(false)}}></div> 
            <div className='mobileMenu' >menu</div>
        </div>
        
    );
};

export default MobileMenu;