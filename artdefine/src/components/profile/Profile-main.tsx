import Banner from "../bannerAndProfileImage/Banner";
import mockBannerPic from "../../assets/images/mock-banner-pic.png";
import mockprofilePic from "../../assets/images/mock-profile-pic.png";
import { useState } from "react";

const ProfileMain: React.FC<{ 
  rank: number, 
  profileActive:boolean,
  galleryActive:boolean, 
  groupsActive:boolean, 
  handleCategoryButtonClick:any}> = ({ rank, profileActive, galleryActive, groupsActive, handleCategoryButtonClick}) => {

  return (
    <div className="profile-main">
      <Banner imageUrl={mockBannerPic} imageAlt="Banner Picture" />

      <div className="profile-btns">
        {rank === 0 ? (<div></div>) : (<button>Message</button> )}
        <div></div>
        {rank === 0 ? (<div></div>) : (<button>Follow</button>)}
        
        <img src={mockprofilePic} alt="Profile Picture" />
      </div>
      <div className='feed-btns profile'>
                <div className='subnav-button'>
                    <button className={((profileActive) ? "active": "")} onClick={() => handleCategoryButtonClick("profile")}><i className="material-icons">person</i></button>
                    <div className='button-text'>Profile</div>
                </div>
                <div className='subnav-button'>
                    <button className={((galleryActive) ? "active": "")} onClick={() => handleCategoryButtonClick("gallery")}><i className="material-icons">collections</i></button>
                    <div className='button-text'>Gallery</div>
                </div>
                <div className='subnav-button'>
                    <button className={((groupsActive) ? "active": "")} onClick={() => handleCategoryButtonClick("groups")}><i className="material-icons">group</i></button>
                    <div className='button-text'>Groups</div>
                </div>            
        </div>
    </div>
  );
};

export default ProfileMain;
// Path: artdefine/src/components/Profile-main.tsx
