import Banner from "../bannerAndProfileImage/Banner";
import mockBannerPic from "../../assets/images/mock-banner-pic.png";
import mockprofilePic from "../../assets/images/mock-profile-pic.png";
import { useState } from "react";

const ProfileMain: React.FC<{ rank: number }> = ({ rank }) => {
  const [profileActive, setProfileActive] = useState<boolean>(true);
  const [galleryActive, setGalleryActive] = useState<boolean>(false);
  const [groupsActive, setGroupsActive] = useState<boolean>(false);

  const handleCategoryButtonClick = (button:string) => {
    switch (button) {
        case "profile":
          setProfileActive(true);
          setGalleryActive(false);
          setGroupsActive(false);
            break;
    
        case "gallery":
          setProfileActive(false);
          setGalleryActive(true);
          setGroupsActive(false);
            break;
        case "groups":
          setProfileActive(false);
          setGalleryActive(false);
          setGroupsActive(true);
            break;
        default:
            break;
    }
};

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
