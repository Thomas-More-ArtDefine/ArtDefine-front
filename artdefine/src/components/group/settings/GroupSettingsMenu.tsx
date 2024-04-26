import { GroupModel } from "../../../model/GroupModel";
import UnderlinedTitle from "../../general/UnderlinedTitled";
import GroupBanner from "../GroupBanner";
import placeholderBanner from "../../../assets/images/mock-banner-pic.png"

const GroupSettingsMenu: React.FC<{group:GroupModel, setCurrentStep: React.Dispatch<React.SetStateAction<string>>}> = ({group,setCurrentStep} ) => {
    return (
        <>
        <GroupBanner name={group.group_name} bannerUrl={group.group_banner_picture !== '' ? group.group_banner_picture: placeholderBanner} alt={"Banner picture of the group."} />
                    <div className="content">
                        <UnderlinedTitle title="Group Settings" navigateTo={"/group/"+group.id}/>
                        <div className="buttons flex direction-column">
                            <button className="icon" onClick={() => setCurrentStep("General")}><span>General</span><i className="material-icons">public</i></button>
                            <button className="icon" onClick={() => setCurrentStep("Privacy")}><span>Privacy Settings</span><i className="material-icons">visibility_off</i></button>
                            <button className="icon" onClick={() => setCurrentStep("Members")}><span>Members</span><i className="material-icons">groups</i></button>
                            <div className="divider red"></div>
                            <button className="icon warning" onClick={() => console.log("not implemented yet")}><span>Delete Group</span><i className="material-icons">delete</i></button>
                        </div>
                    </div>
        </>
    );
    }

export default GroupSettingsMenu;