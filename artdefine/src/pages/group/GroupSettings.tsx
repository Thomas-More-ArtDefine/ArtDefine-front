import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GroupModel } from "../../model/GroupModel";
import GROUPMOCK from "../../mock/GroupMock";
import GroupSettingsMenu from "../../components/group/settings/GroupSettingsMenu";
import GroupSettingsPrivacy from "../../components/group/settings/GroupsSettingsPrivacy";
import UnderlinedTitle from "../../components/general/UnderlinedTitled";

export default function GroupSettings() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [group, setGroup] = useState<GroupModel>(GROUPMOCK[0]);
    const [currentStep, setCurrentStep] = useState("Menu");
    

    // api calls to be added
    const handleGeneralUpdateClick =async () => {
        console.log("save new general settings");
        setCurrentStep("Menu")
    };

    return (
        <>
            <div className="page group-page">
            {currentStep === "Menu" && 
                <GroupSettingsMenu group={group} setCurrentStep={setCurrentStep}/>
            }

            {currentStep === "General" && 
            <>
            <div className="content">
                <UnderlinedTitle title="General Settings" setCurrentStep={setCurrentStep} step="Menu" />
                <div className="settings">
                    
                </div>
                <button className="setting-update-btn" onClick={() => handleGeneralUpdateClick()}>Update</button>
            </div>
        </>}


            {currentStep === "Privacy" && 
                <>
                    <GroupSettingsPrivacy group={group} setCurrentStep={setCurrentStep} />
                    
                </>
            }


            {currentStep === "Members" && 
            <>
            <div className="content">
                <UnderlinedTitle title="Members & Roles" setCurrentStep={setCurrentStep} step="Menu" />
                
                <div className="settings">
                    
                </div>
            </div>
        </>
            }

            </div>

        </>
        
    )
}