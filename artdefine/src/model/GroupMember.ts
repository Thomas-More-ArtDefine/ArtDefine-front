import { GroupModel } from "./GroupModel";
import { User } from "./userModel";

export interface GroupMember{
    id: string;
    member: User;
    group: GroupModel;
}