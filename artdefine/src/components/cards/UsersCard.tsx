import { User } from "../../model/userModel";
import UserSmallCard from "./UserSmallCard";

const UsersCard = ({
    title,
  users
  }: {
    title: string;
    
    users: User[];
    
  }) => {
    return (
      <div className="users-card card">
        <div className="title">{title}</div>
        <p className="content"><div className="list">{
            users.map((user, index) => (
                <UserSmallCard key={index} user={user} />
              ))
        }</div></p>
       
      </div>
    );
  };
  
  export default UsersCard;
  