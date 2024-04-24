import { GroupModel } from "./GroupModel";
import { Artwork, visibility } from "./PostModel";
import { User } from "./userModel";


export interface Folder {
    id: string,
    folder_order: number,
    folder_name: string,
    folder_description: string,
    folder_archived: boolean;
    folder_visibility: visibility,
    user?: User;
    group?: GroupModel;
    posts?: Artwork[];
}
