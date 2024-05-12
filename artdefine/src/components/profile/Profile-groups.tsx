import { useState } from "react";
import ProfileTabs from "./profile-tabs";

const ProfileGroups: React.FC<{ rank: number }> = ({ rank }) => {
  const [showGroups, setShowGroups] = useState<boolean>(true);
  const [showFollowers, setShowFollowers] = useState<boolean>(false);
  const [showFollowing, setShowFollowing] = useState<boolean>(false);


  const handleTabClick = (str:string) =>{
    switch (str) {
      case "groups":
        setShowGroups(true);
        setShowFollowers(false);
        setShowFollowing(false);
        break;
    
      case "followers":
        setShowGroups(false);
        setShowFollowers(true);
        setShowFollowing(false);
        break;
      case "following":
        setShowGroups(false);
        setShowFollowers(false);
        setShowFollowing(true);
        break;
      default:
        break;
    }
  }

    return (
      <div className="profile-groups">
        <div className="max-size white-card">
          <ProfileTabs handleTabClick={handleTabClick} ShowTab1={showFollowers} ShowTab2={showFollowing} ShowTab3={showGroups} />
        </div>
      </div>
    );
  };
  
  export default ProfileGroups;
  