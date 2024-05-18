import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ProfileMain from "./Profile-main";
import ProfileHome from "./Profile-home";
import ProfileGallery from "./Profile-gallery";
import ProfileGroups from "./Profile-groups";
import { User } from "../../model/userModel";
import { FolderContext } from "../../context/FolderContext";

const Profile: React.FC<{ user?:User|null }> = ({ user }) => {
    const [profileActive, setProfileActive] = useState<boolean>(true);
    const [galleryActive, setGalleryActive] = useState<boolean>(false);
    const [groupsActive, setGroupsActive] = useState<boolean>(false);
    const { findFoldersByGroupId, folders } = useContext(FolderContext) || {};

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

useEffect(() => {
    const fetchFolders = async () => {
        if (findFoldersByGroupId && user) {
          await findFoldersByGroupId(user.id ?? "");
        }
      };

    fetchFolders();
  }, [user, findFoldersByGroupId]);

    return (
        <>
        <div className="page profile own-profile">
            <ProfileMain rank={1} profileActive={profileActive} groupsActive={groupsActive} galleryActive={galleryActive} handleCategoryButtonClick={handleCategoryButtonClick} profileImg={user?.user_profile_picture} />
            {profileActive && !galleryActive && !groupsActive? <ProfileHome rank={1} user={user} folders={folders? folders: []} handleCategoryButtonClick={handleCategoryButtonClick}/>
            :galleryActive && !profileActive && !groupsActive? <ProfileGallery rank={1} folders={folders? folders :user?.folders}/>
            :groupsActive && !profileActive && !galleryActive? <ProfileGroups userid={user?.id} rank={1} user={user?user:undefined}/>
            : <p>Something went wrong - please reload the page</p>}
            </div>
        </>
    );

};
  
  export default Profile;
  