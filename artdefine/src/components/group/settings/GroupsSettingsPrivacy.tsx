import { useState } from "react";
import { GroupModel } from "../../../model/GroupModel";
import { GroupJoin, groupVisibility } from "../../Create-group-modal";
import UnderlinedTitle from "../../general/UnderlinedTitled";

const GroupSettingsPrivacy: React.FC<{group:GroupModel, setCurrentStep: React.Dispatch<React.SetStateAction<string>>}> = ({group,setCurrentStep} ) => {
    const [visibility, setVisibility] = useState((group.group_setting_visibility === groupVisibility.PUBLIC) ? true : false);
    const [join, setJoin] = useState(group.group_setting_join);
    const [userLimit, setUserLimit] = useState(group.group_userlimit.toString());
    const [maxUserLimit, setMaxUserLimit] = useState(10);
    const [minUserLimit, setMinUserLimit] = useState(5);
    
    const handlePrivacyUpdateClick =async () => {
        console.log("save new privacy settings");
        setCurrentStep("Menu")
    };

    return (
        <>
        <div className="content">
                        <UnderlinedTitle title="Privacy Settings" setCurrentStep={setCurrentStep} step="Menu" />
                        <div className="settings">
                            <div className="font eaves heavy fs20 align-start">Content visibility</div>
                            <div className='togglecontainer'>
                                <span className='toggle'>
                                    <input id='visibility' name="visibility" type="checkbox" checked={visibility} onChange={(e) => setVisibility(e.target.checked)} />
                                    <span className="slider"><span className='switch'></span></span>
                                </span>
                                <span className='option'>{visibility ? ("Public") : ("Private")}</span>
                           </div>
                           
                           <div className="font eaves heavy fs20 align-start">Join Setting</div>
                           <div className='radiocontainer'>
                                <div>
                                    
                                    <input type="radio" id="invite" name="joinoption" checked={join === GroupJoin.INVITE} value={GroupJoin.INVITE} onChange={(e) => setJoin(GroupJoin.INVITE)} />
                                    <span className='bg'></span>
                                    <span className='label'>Invite Only</span>
                                </div>
                                <div>
                                    <input type="radio" id="apply" name="joinoption" checked={join === GroupJoin.APPLY} value={GroupJoin.APPLY} onChange={(e) => setJoin(GroupJoin.APPLY)}  />
                                    <span className='bg'></span>
                                    <span className='label'>Apply</span>
                                </div>
                                <div>
                                    <input type="radio" id="open" name="joinoption" checked={join === GroupJoin.OPEN} value={GroupJoin.OPEN} onChange={(e) => setJoin(GroupJoin.OPEN)} />
                                    <span className='bg'></span>
                                    <span className='label'>Open</span>
                                    
                                </div>
                            </div>


                            <div className="font eaves heavy fs20 align-start">User Limit</div>
                            <div className='slidercontainer setting'>
                                <input type="range" name="userlimit" min={minUserLimit} max={maxUserLimit} value={userLimit} onChange={(e) => setUserLimit(e.target.value)} id="userlimit"></input>
                                <span>{userLimit}</span>
                            </div>
                        </div>

                        <button className="setting-update-btn" onClick={() => handlePrivacyUpdateClick()}>Update</button>
                        
                    </div>
        </>
    );
    }

export default GroupSettingsPrivacy;