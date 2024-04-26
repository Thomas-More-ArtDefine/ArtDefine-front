import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import GroupBanner from "../../components/group/GroupBanner";
import GroupNav from "../../components/group/GroupNav";
import GroupHome from "../../components/group/GroupHome";
import Gallery from "../../components/general/Gallery";
import { GroupContext } from "../../context/GroupContext";
import placeholderBanner from "../../assets/images/mock-banner-pic.png"

export default function Group() {

    const { id } = useParams<{ id: string }>();
    //const [group, setGroup] = useState<GroupModel>(GROUPMOCK[0]);
    const [currentStep, setCurrentStep] = useState("Home");
    const { findGroup, group } = useContext(GroupContext) || {};

    useEffect(() => {
        const fetchArtwork = async () => {
          if (findGroup) {
            const artwork = await findGroup(id ?? "");
            console.log(artwork);
          }
        };
    
        fetchArtwork();
      }, [id, findGroup]);

    return (
        <>
        {
            group ? 
            (
                <div className="page group-page">
                    <GroupBanner name={group.group_name} bannerUrl={group.group_banner_picture !== '' ? group.group_banner_picture: placeholderBanner} alt={"Banner picture of the group."} />
                    <GroupNav handleStepChange={setCurrentStep} currentStep={currentStep}/>
                    <div className="content">
                    {currentStep === "Home" && <GroupHome group={group}/>}
                    {currentStep === "Gallery" && <Gallery folders={group.folders}/>}
                    {/* {currentStep === "Chat" && <div>Chat</div>} */}
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
