import { GroupJoin, groupVisibility } from "../components/group/Create-group-modal";
import { Folder } from "./FolderModel";
import { GroupMember } from "./GroupMember";
import { User } from "./userModel";

export interface GroupModel{
    id: string;
    group_name: string;
    group_creationdate: string;
    group_userlimit: number;
    group_bio: string;
    group_profile_picture: string;
    group_banner_picture: string;
    group_setting_visibility: groupVisibility;
    group_setting_join: GroupJoin;
    group_queued_deletion: boolean;
    group_queued_deletion_date: string | null;
    creator_name: string;
    creator_id: string;
    group_links: string[];
    group_rules: string;
    members: GroupMember[];
    folders: Folder[];
}