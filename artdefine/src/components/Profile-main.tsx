import Banner from "./bannerAndProfileImage/Banner";
import mockBannerPic from "../assets/images/mock-banner-pic.png";
import mockprofilePic from "../assets/images/mock-profile-pic.png";

const ProfileMain = ({ rank }: { rank: number }) => {
  return (
    <div className="profile-main">
      <Banner imageUrl={mockBannerPic} imageAlt="Banner Picture" />

      <div className="profile-btns">
        {rank === 0 ? (<div></div>) : (<button>Message</button> )}
        <div></div>
        {rank === 0 ? (<div></div>) : (<button>Follow</button>)}
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
