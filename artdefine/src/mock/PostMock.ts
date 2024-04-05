import { Artwork } from "../model/PostModel";
import src from "../assets/images/Artwork1.jpg";
import USERMOCK from "./UserMock";

const POSTMOCK:Artwork[] = [
    {
        post_id: 1,
        post_content: src,
        post_title: "Whimsical Woodland",
        post_description: "Venturing into the magical realms of my imagination, where every tree tells a tale. 🌳✨",
        post_medium: "Digital Art",
        user: USERMOCK[0]
    }
];


export default POSTMOCK;