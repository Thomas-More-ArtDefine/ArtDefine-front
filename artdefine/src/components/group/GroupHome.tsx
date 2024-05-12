import { GroupModel } from "../../model/GroupModel";
import TextCard from "../cards/TextCard";
import UsersCard from "../cards/UsersCard";

const GroupHome: React.FC<{group:GroupModel}> = ({group} ) => {
    console.log(group.members);
    return (
        <>
        <div className="about">
        <TextCard isUser={false} title="About"  text={group.group_bio} creationDate={group.group_creationdate} links={group.group_links} owner={group.creator_name} />
        </div>
        <div className="rules">
            <TextCard isUser={false} title="Rules" text={group.group_rules}/>
        </div>
        <div className="members">
            <UsersCard title="Members" members={group.members} maxUsers={8} hasMore={true} />
        </div>
        </>
    );
    }

export default GroupHome;