import { useState } from "react";
import { useParams } from "react-router-dom";
import { GroupModel } from "../../model/GroupModel";
import GROUPMOCK from "../../mock/GroupMock";
import GroupBanner from "../../components/group/GroupBanner";
import { GroupJoin } from "../../components/Create-group-modal";

export default function GroupSettings() {

    const { id } = useParams<{ id: string }>();
    const [group, setGroup] = useState<GroupModel>(GROUPMOCK[0]);
    const [currentStep, setCurrentStep] = useState("Menu");
    const [visibility, setVisibility] = useState(false);
    const [join, setJoin] = useState(GroupJoin.INVITE);
    const [userLimit, setUserLimit] = useState("10");
    const [maxUserLimit, setMaxUserLimit] = useState(10);
    const [minUserLimit, setMinUserLimit] = useState(5);

    // api calls to be added

    return (
        <>
            <div className="page group-page">
            {currentStep === "Menu" && 
                <>
                    <GroupBanner name={group.group_name} bannerUrl={group.group_banner_picture} alt={"Banner picture of the group."} />
                    <div className="content">
                        <div className="title">
                            <h3>Group Settings</h3>
                            <div className="divider purple opacity p75"></div>
                        </div>
                        <div className="buttons flex direction-column">
                            <button className="icon" onClick={() => setCurrentStep("General")}><span>General</span><i className="material-icons">public</i></button>
                            <button className="icon" onClick={() => setCurrentStep("Privacy")}><span>Privacy Settings</span><i className="material-icons">visibility_off</i></button>
                            <button className="icon" onClick={() => setCurrentStep("Members")}><span>Members</span><i className="material-icons">groups</i></button>
                            <div className="divider red"></div>
                            <button className="icon warning" onClick={() => console.log("not implemented yet")}><span>Delete Group</span><i className="material-icons">delete</i></button>
                        </div>
                    </div>
                </>
            }

            {currentStep === "General" && 
            <>
            <div className="content">
                <div className="title">
                    <h3 className="flex justify-spacebetween align-end settings-page"><span>General Settings</span><i className="material-icons clickable" onClick={() => setCurrentStep("Menu")}>arrow_back</i></h3>
                    <div className="divider purple opacity p75"></div>
                </div>
                <div className="settings">
                    
                </div>
            </div>
        </>}


            {currentStep === "Privacy" && 
            <>
                    <div className="content">
                        <div className="title">
                            <h3 className="flex justify-spacebetween align-end settings-page"><span>Privacy Settings</span><i className="material-icons clickable" onClick={() => setCurrentStep("Menu")}>arrow_back</i></h3>
                            <div className="divider purple opacity p75"></div>
                        </div>
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

                        <button className="setting-update-btn">Update</button>
                        
                    </div>
                    
                </>
            }


            {currentStep === "Members" && 
            <>
            <div className="content">
                <div className="title">
                    <h3 className="flex justify-spacebetween align-end settings-page"><span>Members & Roles</span><i className="material-icons clickable" onClick={() => setCurrentStep("Menu")}>arrow_back</i></h3>
                    <div className="divider purple opacity p75"></div>
                </div>
                <div className="settings">
                    
                </div>
            </div>
        </>
            }

            </div>

        </>
        
    )
}