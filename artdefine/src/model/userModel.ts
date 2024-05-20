import { Folder } from "./FolderModel";
import { Link } from "./LinkModel";

export interface User {
    id: string,
    user_name: string,
    user_subtitle: string,
    user_pronouns: string,
    user_bio: string,
    user_profile_picture: string,
    user_banner_picture: string,
    user_deactivated: boolean,
    user_deactivation_date: string,
    user_creationdate: string,
    links: Link[],
    folders: Folder[]
}