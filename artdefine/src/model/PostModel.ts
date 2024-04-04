export interface Artwork {
    post_content: string,
    post_title: string,
    post_description: string,
    post_medium: string,
    user: {
        id: string;
    },
    folders: {
        id: string;
    }[];
}
