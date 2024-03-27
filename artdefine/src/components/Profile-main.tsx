import Banner from "./Banner";
import mockBannerPic from "../assets/images/mock-banner-pic.png"; 
import mockprofilePic from "../assets/images/mock-profile-pic.png";

   const ProfileMain = () => {
        return (
            <div className="profile-main">
                <Banner imageUrl={mockBannerPic} imageAlt="Banner Picture" />
           
                <div className="profile-btns">
                    <button>Follow</button>
                    <div></div>
                    <button>Message</button>
                    <button>Profile</button>
                    <button>Gallery</button>
                    <button>Groups</button>
                    <img src={mockprofilePic} alt="Profile Picture" />
                </div>
            </div>
        );
    };

export default ProfileMain;
// Path: artdefine/src/components/Profile-main.tsx