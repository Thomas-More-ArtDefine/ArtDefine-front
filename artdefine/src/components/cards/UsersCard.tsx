import { User } from "../../model/userModel";
import UserSmallCard from "./UserSmallCard";
import { ReactComponent as ArrowIcon } from "../../assets/vectors/arrow-right-black-.svg";
import Card from "./Card";
import { GroupMember } from "../../model/GroupMember";

const Content: React.FC<{
  members: GroupMember[];
  maxUsers?: number;
}> = ({
  members,
  maxUsers = 12, // optional
}) => {
  return (
    <>
        <div className=" list">
          {members.slice(0, maxUsers).map((member, index) => (
            <UserSmallCard key={index} user={member.member} />
          ))}
          
        </div>
       </>
  );
};

const UsersCard: React.FC<{
  title: string;
  members: GroupMember[];
  maxUsers?: number;
  hasMore?: boolean;
  moreClickHandler?: () => void;
}> = ({
  title,
  members,
  maxUsers = 12, // optional
  hasMore = false, // optional
  moreClickHandler = () => console.log("not yet implemented"), // optional
}) => {
  return (
   <>
   <Card isUser={false} title={title} cssProperty={"users-card"} hasMore={hasMore} moreClickHandler={moreClickHandler} content={<Content members={members} maxUsers={maxUsers} />} />
   </>
  );
};

export default UsersCard;
