import { useState } from "react";
import ProfileMain from "../../components/profile/Profile-main";
import { useAuth } from "../../context/AuthContext";
import ProfileHome from "../../components/profile/Profile-home";
import ProfileGallery from "../../components/profile/Profile-gallery";
import ProfileGroups from "../../components/profile/Profile-groups";



export default function Profile() {
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

  
    const {user} = useAuth();

    console.log(user);

    return (
        <>
        <div className="page profile own-profile">
            <ProfileMain rank={1} profileActive={profileActive} groupsActive={groupsActive} galleryActive={galleryActive} handleCategoryButtonClick={handleCategoryButtonClick} />
            {profileActive && !galleryActive && !groupsActive? <ProfileHome rank={1} user={user}/>
            :galleryActive && !profileActive && !groupsActive? <ProfileGallery rank={1} folders={user?.folders}/>
            :groupsActive && !profileActive && !galleryActive? <ProfileGroups rank={1}/>
            : <p>Something went wrong - please reload the page</p>}
            </div>
        </>
    );

}