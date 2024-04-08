import { GroupModel } from "../model/GroupModel";
import profilePic from "../assets/images/mock-profile-pic.png"
import src from "../assets/images/mock-banner-pic.png";


const  GROUPMOCK: GroupModel[] = [
    {
        id: 1,  
        group_name: "Artists United",
        group_creationdate: "2021-10-10",
        group_userlimit: 100,
        group_bio: "A community of artists from all over the world.",
        group_profile_picture: profilePic,
        group_banner_picture: src,
        group_queued_deletion: false,
        group_queued_deletion_date: null,
        creator_name: "John Doe",
        creator_id: "1"
    }
];





export default GROUPMOCK;