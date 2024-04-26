import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GroupModel } from "../../model/GroupModel";
import GROUPMOCK from "../../mock/GroupMock";
import GroupSettingsMenu from "../../components/group/settings/GroupSettingsMenu";
import GroupSettingsPrivacy from "../../components/group/settings/GroupsSettingsPrivacy";
import UnderlinedTitle from "../../components/general/UnderlinedTitled";
import { GroupContext } from "../../context/GroupContext";

export default function GroupSettings() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    //const [group, setGroup] = useState<GroupModel>(GROUPMOCK[0]);
    const [currentStep, setCurrentStep] = useState("Menu");
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
    

    // api calls to be added
    const handleGeneralUpdateClick =async () => {
        console.log("save new general settings");
        setCurrentStep("Menu")
    };

    return (
        <>
        {
            group ? 
            (
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
            ) 
            : 
            (
                <div>loading...</div>
            )
        }

        </>
        
    )
}