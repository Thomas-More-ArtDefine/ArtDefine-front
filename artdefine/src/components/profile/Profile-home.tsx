import { User } from "../../model/userModel";
import TextCard from "../cards/TextCard";

const ProfileHome: React.FC<{ rank: number, user?: User|null }> = ({ rank, user }) => {
  
    return (
        <>
        {user?
           <div className="profile-home">
                <TextCard title={user.user_name}  text={user.user_bio} subTitle={user.user_subtitle} links={user.links} />
            </div> 
            :
            ''
        }
        </>
        
      
    );
  };
  
  export default ProfileHome;
  