import { GroupModel } from "../../model/GroupModel";
import GroupJoinButton from "./GroupJoinButton";
import placeholderpfp from "../../assets/images/mock-profile-pic.png";

const GroupCard: React.FC<{group:GroupModel}> = ({group} ) => {
    const image = (group.group_profile_picture !== null && group.group_profile_picture !== undefined && group.group_profile_picture !== '') ? <img src={group.group_profile_picture} alt="" className="gpfp" /> : <img src={placeholderpfp} alt="" className="gpfp" />
    return (
        <>
        <div className="group-card">
            {image}
            <div className="group-info">
                <div className="general">
                    <span className="group-name">{group.group_name}</span>
                    <span className="userlimit">
                        <span className="members">{group.members.length}</span>
                        / 
                        <span className="limit">{group.group_userlimit}</span>
                    </span>
                </div>
                
                <div className="description">{group.group_bio}</div>
            </div>
            <GroupJoinButton joined={false} groupjoin={group.group_setting_join} visibility={group.group_setting_visibility} src={group.id} />
        </div>
        </>
    );
    }

export default GroupCard;