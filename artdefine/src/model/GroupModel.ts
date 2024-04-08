export interface GroupModel{
    id: number;
    group_name: string;
    group_creationdate: string;
    group_userlimit: number;
    group_bio: string;
    group_profile_picture: string;
    group_banner_picture: string;
    group_queued_deletion: boolean;
    group_queued_deletion_date: string | null;
    creator_name: string;
    creator_id: string;
    group_links: string[];
}