import { User } from "../model/userModel";
import profilePic from "../assets/images/mock-profile-pic.png"

// Mock data for user profile
const USERMOCK:User[] = [
    {
        id: 1,
        user_name: "John Doe",
        user_subtitle: "Artist",
        user_profile_picture: profilePic,
        user_deactivated: false,
        user_deactivation_date: ""
    },
    
];

export default USERMOCK;