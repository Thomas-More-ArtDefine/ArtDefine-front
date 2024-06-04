import { group } from "console";
import { useNavigate } from "react-router-dom";
import { User } from "../../model/userModel";
import GroupJoinButton from "./GroupJoinButton";
import placeholderpfp from "../../assets/images/mock-profile-pic.png";
import {ReactComponent as ArrowIcon} from "../../assets/vectors/arrow-right-black-.svg";

const UserFeedbackCard: React.FC<{user:User, postId:string}> = ({user, postId} ) => {
    const image = (user.user_profile_picture !== null && user.user_profile_picture !== undefined && user.user_profile_picture !== '') ? <img src={user.user_profile_picture} alt="" className="gpfp" /> : <img src={placeholderpfp} alt="" className="gpfp" />
    
    const navigate = useNavigate();

    const moreClickHandler = () => {
        navigate("/post/" + postId +"/feedback/"+user.id);
    }
    return (
        <>
        <div className="userfeedback-card clickable">
            {image}
            <div className="user-info">
                <div className="general">
                    <span className="user-name">{user.user_name}</span>
                    
                </div>
                
                <div className="description">{"gave feedback"}</div>
            </div>
            <button className="button" onClick={moreClickHandler}>{'>'}</button>
        </div>
        </>
    );
    }

export default UserFeedbackCard;