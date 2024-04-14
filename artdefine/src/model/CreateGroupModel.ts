import { GroupJoin, groupVisibility } from "../components/Create-group-modal";

export interface CreateGroupModel{
    group_name: string;
    group_userlimit: number;
    group_setting_visibility: groupVisibility;
    group_setting_join: GroupJoin;
    creator_id: string;
}