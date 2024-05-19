import { GroupMember } from "../../model/GroupMember";
import UserSmallCard from "../cards/UserSmallCard";

const GroupMembers: React.FC<{members: GroupMember[]}> = ({members}) => {
  
  const memberCards = members.map((member) => 
    <UserSmallCard key={member.member.id} user={member.member} />
)
    return (
      <>
      <div className="white-card">
        <div className="title">
            <h4>Members ({members.length})</h4>
            <div className="divider purple opacity p75"></div>
        </div>
        
        <div className="flex wrap justify-spacebetween members">
           {memberCards} 
        </div>
        
        </div>
        
      </>
    );
  };
  
  export default GroupMembers;
  