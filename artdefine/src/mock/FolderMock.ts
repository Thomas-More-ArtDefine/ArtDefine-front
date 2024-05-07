import { Folder } from "../model/FolderModel";
import { visibility } from "../model/PostModel";
import GROUPMOCK from "./GroupMock";
import USERMOCK from "./UserMock";

const FOLDERMOCK:Folder[] = [
    {
        id: "1",
        folder_order: 1,
        folder_name: "example folder 1",
        folder_description: "an example folder",
        folder_archived: false,
        folder_visibility: visibility.PUBLIC,
        group: GROUPMOCK[0],
        posts: [
            {id: "21",
            user_id: '1',
            post_content: "https://upload.wikimedia.org/wikipedia/commons/9/91/Inside_the_Churchill_War_Rooms_%2822%29_-_geograph.org.uk_-_2807382.jpg?20211201135822",
            post_title: "example post 21",
            post_description: "",
            post_visibility: visibility.PUBLIC,
            post_medium: "Digital Art",
            user: {
                id: "1",
                user_name: "testuser1",
                user_subtitle: "",
                user_profile_picture: "",
                user_deactivated: false,
                user_deactivation_date: ""
            },
            folders:[]},
            {id: "9",
            user_id: '1',
            post_content: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Carnaval_de_San_Juan_Totolac%2C_Tlaxcala_2018_03.jpg/800px-Carnaval_de_San_Juan_Totolac%2C_Tlaxcala_2018_03.jpg?20190613214544",
            post_title: "example post 9",
            post_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
            post_visibility: visibility.PUBLIC,
            post_medium: "Digital Art",
            user: {
                id: "1",
                user_name: "testuser1",
                user_subtitle: "",
                user_profile_picture: "",
                user_deactivated: false,
                user_deactivation_date: ""
            },
            folders:[]}
            ]
    },
    {
        id: "2",
        folder_order: 3,
        folder_name: "example folder 2",
        folder_description: "an example folder",
        folder_archived: false,
        folder_visibility: visibility.PUBLIC,
        group: GROUPMOCK[1],
        posts:[
            {
                id: "7",
                user_id: '1',
        post_content: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2021._09.01_%E7%B8%BD%E7%B5%B1%E5%81%95%E5%90%8C%E5%89%AF%E7%B8%BD%E7%B5%B1%E5%87%BA%E5%B8%AD%E3%80%8COur_Heroes%EF%BC%81%E5%8F%B0%E7%81%A3%E8%8B%B1%E9%9B%84_%E5%87%B1%E6%97%8B%E6%B4%BE%E5%B0%8D%E3%80%8D_%2851417923285%29.jpg/800px-2021._09.01_%E7%B8%BD%E7%B5%B1%E5%81%95%E5%90%8C%E5%89%AF%E7%B8%BD%E7%B5%B1%E5%87%BA%E5%B8%AD%E3%80%8COur_Heroes%EF%BC%81%E5%8F%B0%E7%81%A3%E8%8B%B1%E9%9B%84_%E5%87%B1%E6%97%8B%E6%B4%BE%E5%B0%8D%E3%80%8D_%2851417923285%29.jpg?20210901115429",
        post_title: "example post 7",
        post_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
        post_visibility: visibility.PUBLIC,
        post_medium: "Digital Art",
        user: {
            id: "1",
            user_name: "testuser1",
            user_subtitle: "",
            user_profile_picture: "",
            user_deactivated: false,
            user_deactivation_date: ""
        },
        folders:[]
            }
        ]
    },
    {
        id: "3",
        folder_order: 2,
        folder_name: "example user folder 1",
        folder_description: "an example folder",
        folder_archived: false,
        folder_visibility: visibility.PRIVATE,
        user: USERMOCK[0]
    }
];


export default FOLDERMOCK;