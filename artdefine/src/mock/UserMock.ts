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
    {
        id: 2,
        user_name: "Jane Smith",
        user_subtitle: "Designer",
        user_profile_picture: profilePic,
        user_deactivated: false,
        user_deactivation_date: ""
    },
    {
        id: 3,
        user_name: "Alice Johnson",
        user_subtitle: "Photographer",
        user_profile_picture: profilePic,
        user_deactivated: false,
        user_deactivation_date: ""
    },
    {
        id: 4,
        user_name: "Bob Brown",
        user_subtitle: "Illustrator",
        user_profile_picture: profilePic,
        user_deactivated: false,
        user_deactivation_date: ""
    },
    {
        id: 5,
        user_name: "Charlie White",
        user_subtitle: "Painter",
        user_profile_picture: profilePic,
        user_deactivated: false,
        user_deactivation_date: ""
    },
    {
        id: 6,
        user_name: "David Black",
        user_subtitle: "Sculptor",
        user_profile_picture: profilePic,
        user_deactivated: false,
        user_deactivation_date: ""
    },
    {
        id: 7,
        user_name: "Eve Green",
        user_subtitle: "Architect",
        user_profile_picture: profilePic,
        user_deactivated: false,
        user_deactivation_date: ""
    },
    {
        id: 8,
        user_name: "Frank Red",
        user_subtitle: "Animator",
        user_profile_picture: profilePic,
        user_deactivated: false,
        user_deactivation_date: ""
    },
    {
        id: 9,
        user_name: "Grace Blue",
        user_subtitle: "Graphic Designer",
        user_profile_picture: profilePic,
        user_deactivated: false,
        user_deactivation_date: ""
    },
    {
        id: 10,
        user_name: "Henry Orange",
        user_subtitle: "Web Designer",
        user_profile_picture: profilePic,
        user_deactivated: false,
        user_deactivation_date: ""
    }
    
];

export default USERMOCK;