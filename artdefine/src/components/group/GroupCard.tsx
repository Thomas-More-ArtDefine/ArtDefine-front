import { GroupModel } from "../../model/GroupModel";
import GroupJoinButton from "./GroupJoinButton";

const GroupCard: React.FC<{group:GroupModel}> = ({group} ) => {
    return (
        <>
        <div className="group-card">
            <img src={group.group_profile_picture} alt="" className="gpfp" />
            <div className="group-info">
                <div className="general">
                    <span className="group-name">{group.group_name}</span>
                    <span className="userlimit">
                        <span className="members">{group.group_members.length}</span>
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