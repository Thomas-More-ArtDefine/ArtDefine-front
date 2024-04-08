import { useParams } from "react-router-dom";
import Banner from "../../components/bannerAndProfileImage/Banner";
import { GroupModel } from "../../model/GroupModel";
import GROUPMOCK from "../../mock/GroupMock";
import { useState } from "react";
import GroupBanner from "../../components/group/GroupBanner";
import GroupNav from "../../components/group/GroupNav";
import GroupHome from "../../components/group/GroupHome";

export default function Group() {

    const { id } = useParams<{ id: string }>();
    const [group, setGroup] = useState<GroupModel>(GROUPMOCK[0]);
    const [currentStep, setCurrentStep] = useState("Home");

    return (
        <>
            <div className="page group-page">
                <GroupBanner name={group.group_name} bannerUrl={group.group_banner_picture} alt={"Banner picture of the group."} />
                <GroupNav handleStepChange={setCurrentStep} currentStep={currentStep}/>
                <div className="content">
                {currentStep === "Home" && <GroupHome title={"About"} text={group.group_bio} creationDate={group.group_creationdate} links={group.group_links} owner={group.creator_name} />}
                {currentStep === "Gallery" && <div>Gallery</div>}
                {currentStep === "Chat" && <div>Chat</div>}
                 </div>
            </div>

        </>
        
    )
}
