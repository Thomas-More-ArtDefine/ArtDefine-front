export interface Artwork {
    post_content: string,
    post_title: string,
    user: {
        id: string;
    },
    folders: {
        id: string;
    }[];
}
