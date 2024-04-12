import { User } from "../../model/userModel";
import UserSmallCard from "./UserSmallCard";
import { ReactComponent as ArrowIcon } from "../../assets/vectors/arrow-right-black-.svg";
import Card from "./Card";

const Content: React.FC<{
  users: User[];
  maxUsers?: number;
}> = ({
  users,
  maxUsers = 12, // optional
}) => {
  return (
    <>
        <div className=" list">
          {users.slice(0, maxUsers).map((user, index) => (
            <UserSmallCard key={index} user={user} />
          ))}
          
        </div>
       </>
  );
};

const UsersCard: React.FC<{
  title: string;
  users: User[];
  maxUsers?: number;
  hasMore?: boolean;
  moreClickHandler?: () => void;
}> = ({
  title,
  users,
  maxUsers = 12, // optional
  hasMore = false, // optional
  moreClickHandler = () => console.log("not yet implemented"), // optional
}) => {
  return (
   <>
   <Card title={title} cssProperty={"users-card"} hasMore={hasMore} moreClickHandler={moreClickHandler} content={<Content users={users} maxUsers={maxUsers} />} />
   </>
  );
};

export default UsersCard;
