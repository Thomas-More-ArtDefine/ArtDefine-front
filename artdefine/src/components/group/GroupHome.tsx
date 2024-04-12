import { GroupModel } from "../../model/GroupModel";
import TextCard from "../cards/TextCard";
import UsersCard from "../cards/UsersCard";

const GroupHome: React.FC<{group:GroupModel}> = ({group} ) => {
    return (
        <>
        <div className="about">
        <TextCard title="About"  text={group.group_bio} creationDate={group.group_creationdate} links={group.group_links} owner={group.creator_name} />
        </div>
        <div className="rules">
            <TextCard title="Rules" text={group.group_rules}/>
        </div>
        <div className="members">
            <UsersCard title="Members" users={group.group_members} maxUsers={8} hasMore={true} />
        </div>
        </>
    );
    }

export default GroupHome;