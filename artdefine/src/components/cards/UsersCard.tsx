import { User } from "../../model/userModel";
import UserSmallCard from "./UserSmallCard";

const UsersCard = ({
    title,
    users,
    maxUsers = 12 // optional
  }: {
    title: string;
    users: User[];
    maxUsers?: number;
    
  }) => {
    return (
      <div className="users-card card">
        <div className="title">{title}</div>
        <p className="content">
          <div className="list">
            {users.slice(0, maxUsers).map((user, index) => (
              <UserSmallCard key={index} user={user} />
            ))}
          </div>
        </p>
      </div>
    );
  };
  
  export default UsersCard;
  