import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import GroupBanner from "../../components/group/GroupBanner";
import GroupNav from "../../components/group/GroupNav";
import GroupHome from "../../components/group/GroupHome";
import Gallery from "../../components/general/Gallery";
import { GroupContext } from "../../context/GroupContext";
import placeholderBanner from "../../assets/images/mock-banner-pic.png"
import GroupDetails from "../../components/group/GroupDetails";
import { FolderContext } from "../../context/FolderContext";

export default function Group() {

    const location = useLocation();
    const { id } = useParams<{ id: string }>();
    const state = location.state ? location.state.state : 'Home';
    const [currentStep, setCurrentStep] = useState(state);
    const { findGroup, group } = useContext(GroupContext) || {};
    const { findFoldersByGroupId, folders } = useContext(FolderContext) || {};

    useEffect(() => {
        const fetchGroup = async () => {
          if (findGroup) {
            await findGroup(id ?? "");
          }
        };

        const fetchFolders = async () => {
            if (findFoldersByGroupId) {
              await findFoldersByGroupId(id ?? "");
            }
          };
    
        fetchGroup();
        fetchFolders();
      }, [id, findGroup,findFoldersByGroupId]);

    return (
        <>
        {
            group ? 
            (
                <div className="page group-page">
                    <GroupBanner handleStepChange={setCurrentStep} name={group.group_name} bannerUrl={group.group_banner_picture !== '' ? group.group_banner_picture: placeholderBanner} alt={"Banner picture of the group."} />
                    <GroupNav handleStepChange={setCurrentStep} currentStep={currentStep}/>
                    <div className="content">
                    {currentStep === "Home" && <GroupHome group={group}/>}
                    {currentStep === "Gallery" && <Gallery folders={folders? folders: group.folders}/>}
                    {/* {currentStep === "Chat" && <div>Chat</div>} */}
                    {currentStep === "Details" && <GroupDetails group={group}/>}
                    
                    </div>
                </div>
            ) 
            : 
            (
                <div>loading...</div>
            )
        }
            

        </>
        
    )
}
