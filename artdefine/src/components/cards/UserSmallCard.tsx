import { User } from "../../model/userModel";
import placeholderPfp from "../../assets/images/mock-profile-pic.png"


// Function to check the length of a text and truncate if necessary
const checkLength = (text: string): string => {
    if (text.length > 8) {
        return text.slice(0, 7) + "...";
    } else {
        return text;
    }
}



const UserSmallCard: React.FC<{user:User}> = ({user}) => {
    return (
        <>
        {
            <div className="user-small-card">
                <div className="content">
                    <div className="image">
                        <img src={user.user_profile_picture !== '' ? user.user_profile_picture : placeholderPfp} alt="profile" />
                    </div>
                    <div className="info">
                        <div className="name">{checkLength(user.user_name)}</div>
                    </div>
                </div>
            </div>
        }
        </>
    );
    }

export default UserSmallCard;