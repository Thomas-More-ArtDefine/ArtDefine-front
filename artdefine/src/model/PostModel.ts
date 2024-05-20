import { Folder } from "./FolderModel";
import { User } from "./userModel";

export enum visibility {
    PRIVATE = "private",
    SELECTIVE = "selective",
    LINK = "link",
    PUBLIC = "public"
  }

export interface Artwork {
    id: string,
    user_id: string,
    post_content: string,
    post_title: string,
    post_description: string,
    post_medium: string,
    post_visibility: visibility,
    post_tags: string,
    user: User;
    folders: Folder[];
}
