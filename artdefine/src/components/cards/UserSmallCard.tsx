import { User } from "../../model/userModel";


// Function to check the length of a text and truncate if necessary
const checkLength = (text:string) => {
    if (text.length > 9) {
        return text.slice(0, 8) + "...";
    } else {
        return text;
    }
}



const UserSmallCard = ({user}:{user:User}) => {
    return (
        <>
        {
            <div className="user-small-card">
                <div className="content">
                    <div className="image">
                        <img src={user.user_profile_picture} alt="profile" />
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