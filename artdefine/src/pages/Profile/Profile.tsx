import ProfileMain from "../../components/Profile-main";
import { useAuth } from "../../context/AuthContext";



export default function Profile() {
  
    const {user} = useAuth();
    return (
        <>
        <div className="page profile own-profile">
            <ProfileMain rank={1} />
            {user && <p>{user.user_name}</p>}
            </div>
        </>
    );

}