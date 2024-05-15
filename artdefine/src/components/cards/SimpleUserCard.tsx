import { User } from "../../model/userModel";
import placeholderpfp from "../../assets/images/mock-profile-pic.png";
import { useNavigate } from "react-router-dom";

const SimpleUserCard: React.FC<{user:User}> = ({user} ) => {
    const image = (user.user_profile_picture !== null && user.user_profile_picture !== undefined && user.user_profile_picture !== '') ? <img src={user.user_profile_picture} alt="" className="gpfp" /> : <img src={placeholderpfp} alt="" className="gpfp" />
    const navigate = useNavigate();
    return (
        <>
        <div className="simple-user-card flex justify-start align-center clickable" onClick={()=>navigate('profile/'+user.id)}>
            {image}
            <div className="username font eaves heavy fs24 dark-purple">
            {user.user_name}
            </div>
        </div>
        </>
    );
    }

export default SimpleUserCard;