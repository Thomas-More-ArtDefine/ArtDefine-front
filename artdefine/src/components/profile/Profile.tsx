import { useContext, useEffect, useState } from "react";
import ProfileMain from "./Profile-main";
import ProfileHome from "./Profile-home";
import ProfileGallery from "./Profile-gallery";
import ProfileGroups from "./Profile-groups";
import { User } from "../../model/userModel";
import { FolderContext } from "../../context/FolderContext";
import { useParams } from "react-router-dom";
import ProfileEditFolders from "./Profile-editFolders";

const Profile: React.FC<{ user:User }> = ({ user }) => {
    const [currentStep, setCurrentStep] = useState("main");
    const { findFoldersByUserId, folders } = useContext(FolderContext) || {};
    const { id } = useParams<{ id: string }>();

    const handleCategoryButtonClick = (button:string) => {
        switch (button) {
            case "profile":
            setCurrentStep('main');
                break;
    
            case "gallery":
            setCurrentStep('gallery');
                break;
            case "groups":
            setCurrentStep('groups');
                break;
            default:
                break;
    }
};

useEffect(() => {
    const fetchFolders = async () => {
        if (findFoldersByUserId && user) {
          await findFoldersByUserId(user.id ?? "");
        }
      };

    fetchFolders();
  }, [user, findFoldersByUserId]);

    return (
        <>
        <div className="page profile own-profile">
            
            <ProfileMain rank={id && id !== "1"?1:0} profileActive={currentStep === "main"} groupsActive={currentStep === "groups"} galleryActive={currentStep === "gallery"} handleCategoryButtonClick={handleCategoryButtonClick} profileImg={user?.user_profile_picture} bannerImg={user?.user_banner_picture} />
            {currentStep === "main"? <ProfileHome rank={1} user={user} folders={folders? folders: []} handleCategoryButtonClick={handleCategoryButtonClick}/>
            :currentStep === "gallery"? <ProfileGallery rank={1} folders={folders? folders :user?.folders} setstate={setCurrentStep}/>
            :currentStep === "groups"? <ProfileGroups userid={user?.id} rank={1} user={user?user:undefined}/>
            :currentStep === "folderedit"? <ProfileEditFolders folders={folders? folders :user?.folders} setstate={setCurrentStep}/>
            : <p className="error-text">Something went wrong - please reload the page</p>}
            </div>
        </>
    );

};
  
  export default Profile;
  