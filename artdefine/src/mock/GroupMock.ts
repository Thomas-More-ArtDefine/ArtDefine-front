import { GroupModel } from "../model/GroupModel";
import profilePic from "../assets/images/mock-profile-pic.png";
import src from "../assets/images/mock-banner-pic.png";
import USERMOCK from "./UserMock";
import { GroupJoin, groupVisibility } from "../components/group/Create-group-modal";
import GROUPFOLDERMOCK from "./GroupFolderMock";



const GROUPMOCK: GroupModel[] = [
  {
    id: "1",
    group_name: "Artists United",
    group_creationdate: "2021-10-10",
    group_userlimit: 100,
    group_bio: "A community of artists from all over the world.",
    group_profile_picture: profilePic,
    group_banner_picture: src,
    group_setting_visibility: groupVisibility.PUBLIC,
    group_setting_join: GroupJoin.OPEN,
    group_queued_deletion: false,
    group_queued_deletion_date: null,
    creator_name: "John Doe",
    creator_id: "1",
    group_links: ["https://www.facebook.com", "https://www.instagram.com"],
    group_rules: "No NSFW content allowed.",
    members: [],
    folders: GROUPFOLDERMOCK
  },
  {
    id: "2",
    group_name: "Design Enthusiasts",
    group_creationdate: "2021-11-01",
    group_userlimit: 50,
    group_bio: "A community for design enthusiasts to share ideas and inspiration.",
    group_profile_picture: profilePic,
    group_banner_picture: src,
    group_setting_visibility: groupVisibility.PUBLIC,
    group_setting_join: GroupJoin.APPLY,
    group_queued_deletion: false,
    group_queued_deletion_date: null,
    creator_name: "Jane Smith",
    creator_id: "2",
    group_links: ["https://www.twitter.com", "https://www.linkedin.com"],
    group_rules: "Respect each other's work and provide constructive feedback.",
    members: [],
    folders: GROUPFOLDERMOCK
  }
];

export default GROUPMOCK;
